import Module from "./Module";
import modulesData from "./ModulesData";


const ModulePage = ({ module }) => {
    return (
      <div>
        {module ? <Module {...module} /> : <p>Module introuvable</p>}
      </div>
    );
  };
  
  export async function getStaticPaths() {
    const paths = modulesData.map((module) => ({
      params: { slug: module.slug },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    if (!params || !params.slug) {
      return { notFound: true };
    }
  
    const module = modulesData.find((mod) => mod.slug === params.slug);
  
    return {
      props: {
        module,
      },
    };
  }
  
  export default ModulePage;