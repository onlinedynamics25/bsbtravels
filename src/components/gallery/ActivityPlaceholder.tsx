import Image from "next/image";

export default function ActivityPlaceholder() {
  return (
    <figure className="flex flex-col items-center">
      <Image
        src="/placeholder.jpg" // put a default placeholder image in /public
        alt="No photos available"
        width={400}
        height={300}
        className="rounded-xl object-cover shadow"
      />
      <figcaption className="text-sm text-gray-500 mt-2 italic">
        No photos available for this activity
      </figcaption>
    </figure>
  );
}
