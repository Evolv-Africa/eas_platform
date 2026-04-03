import { FC } from "react";
import { Avatar } from "../core";
import { Testimonial } from "./constants";

const TestimonialCard: FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="rounded-xl bg-white p-6 space-y-4 w-full">
    <div className="flex items-center gap-3">
      <Avatar name={testimonial.name} src={testimonial.avatar} size="md" />
      <div>
        <p className="font-neue-machina font-extrabold text-semantic-text-primary text-base leading-6">
          {testimonial.name}
        </p>
        <p className="font-poppins text-sm text-gray-600">{testimonial.role}</p>
      </div>
    </div>
    <p className="font-poppins text-base leading-6 text-semantic-text-secondary">
      {testimonial.quote}
    </p>
  </div>
);

export default TestimonialCard;
