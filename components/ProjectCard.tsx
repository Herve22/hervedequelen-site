import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

export default function ProjectCard({ title, description, tags, image, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative w-full h-48 bg-neutral-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            
          />
        ) : (
          <div className="flex items-center justify-center h-full text-neutral-400 text-sm">
            Capture d'écran à venir
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-neutral-100 text-neutral-700 text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <Link
            href={link}
            className="text-accent hover:text-accent-dark font-semibold inline-flex items-center"
          >
            Voir le projet →
          </Link>
        )}
      </div>
    </div>
  );
}
