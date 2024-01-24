'use client'
 
import { usePathname } from 'next/navigation'
import modulesData from '../ModulesData';

export default function Page() {
  const pathName = usePathname();
  const cleanedSlug = pathName ? pathName.substring(1) : '';
  const module = modulesData.find((mod) => mod.slug === cleanedSlug);

  if (!module) {
    return <p>Module non trouvé</p>;
  }
 
  return (
    <div>
      {module.title}
    </div>
  )
}