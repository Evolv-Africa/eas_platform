import { FC, FormEvent, useState } from "react";
import { Button } from "@/components/core/button/Button";
import { Modal } from "@/components/core/modal/Modal";
import type { SanityEvent, SanityRegistrationField } from "@/types";

interface RegisterButtonProps {
  event?: SanityEvent;
}

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-gray-500 bg-white px-4 py-3 font-poppins text-sm text-semantic-text-primary placeholder:text-semantic-text-secondary/60 focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all";

const Field: FC<{ field: SanityRegistrationField }> = ({ field }) => {
  const common = {
    id: field.name,
    name: field.name,
    required: field.required ?? false,
    placeholder: field.placeholder,
    className: inputClass,
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={field.name} className="font-poppins text-sm font-medium text-semantic-text-primary">
        {field.label}
        {field.required && <span className="text-[#4CAF50]"> *</span>}
      </label>
      {field.type === "textarea" ? (
        <textarea {...common} rows={4} />
      ) : field.type === "select" ? (
        <select {...common} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input {...common} type={field.type ?? "text"} />
      )}
    </div>
  );
};

/**
 * Registration CTA.
 * - `registrationFields` present  -> opens a form modal that POSTs to the Google Apps Script URL.
 * - otherwise                     -> opens `registrationUrl` (e.g. Tix) in a new tab.
 */
export const RegisterButton: FC<RegisterButtonProps> = ({ event }) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const url = event?.registrationUrl;
  const fields = event?.registrationFields ?? [];
  const hasForm = fields.length > 0;
  const btnClass = "py-3! px-8 text-[15px] h-12";

  if (!url) {
    return (
      <Button variant="primary" size="medium" className={btnClass} isDisabled>
        Registration Opening Soon
      </Button>
    );
  }

  if (!hasForm) {
    return (
      <Button
        variant="primary"
        size="medium"
        className={btnClass}
        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
      >
        Register Now
      </Button>
    );
  }

  const close = () => {
    setOpen(false);
    setTimeout(() => setStatus("idle"), 200);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setErrorMessage("");
    setStatus("submitting");
    try {
      // text/plain keeps this a "simple" request (no CORS preflight), which Apps Script requires.
      // The script reads the body via JSON.parse(e.postData.contents).
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result?.status !== "success") {
        setErrorMessage(result?.message || "");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Button variant="primary" size="medium" className={btnClass} onClick={() => setOpen(true)}>
        Register Now
      </Button>

      <Modal
        open={open}
        onClose={close}
        title={status === "success" ? "You're In!" : "Register"}
        subtitle={
          status === "success"
            ? undefined
            : `Fill in your details to secure your spot${event?.title ? ` at ${event.title}` : ""}.`
        }
      >
        {status === "success" ? (
          <div className="space-y-6">
            <p className="font-poppins text-sm text-semantic-text-secondary leading-6">
              Thanks for registering. We've received your details and will be in touch soon.
            </p>
            <Button variant="primary" size="medium" className="py-3! px-8 h-12" onClick={close}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            {fields.map((f) => (
              <Field key={f._key ?? f.name} field={f} />
            ))}
            {status === "error" && (
              <p role="alert" className="font-poppins text-sm text-red-600">
                {errorMessage || "Something went wrong. Please check your connection and try again."}
              </p>
            )}
            <Button
              type="submit"
              variant="primary"
              size="medium"
              className="w-full py-3! h-12 mt-2"
              isLoading={status === "submitting"}
              loadingText="Submitting..."
            >
              Submit Registration
            </Button>
          </form>
        )}
      </Modal>
    </>
  );
};

export default RegisterButton;
