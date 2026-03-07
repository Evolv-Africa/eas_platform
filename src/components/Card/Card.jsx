export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="rounded-lg mb-3"
        />
      )}

      <h3 className="text-xl font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}