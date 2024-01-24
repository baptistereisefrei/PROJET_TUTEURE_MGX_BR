import { GetStaticProps, GetStaticPaths } from 'next';

interface EventProps {
    event: {
      slug: string;
      title: string;
    };
}

export default function Event({ event }: EventProps) {
    if (!event) {
        return <p>Event not found</p>;
    }
    return (
        <div>
            <h1>{event.title}</h1>
        </div>
      );
  }
