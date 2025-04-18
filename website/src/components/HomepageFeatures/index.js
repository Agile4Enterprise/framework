import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Penser globalement, s’adapter localement',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Nous proposons une approche qui répond de manière adaptée, durable et efficace aux défis des entreprises d’aujourd’hui. Ce Framework permet d’aligner la vision stratégique avec l’adaptabilité opérationnelle, maximisant ainsi l’impact tout en maîtrisant les risques.
      </>
    ),
  },
  {
    title: "Les 4 Dimensions de l'Agilité d'Entreprise",
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Si la capacité d’une entreprise à gérer le changement repose sur l’art de la prise de décision continue, alors cette dynamique s’organise autour des quatre niveaux décisionnels de l’entreprise.
        Cela se manifeste par un alignement efficace entre les choix stratégiques et les actions opérationnelles.
      </>
    ),
  },
  {
    title: "Les 4 Archétypes d'une Organisation Adaptative",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        En réponse à des enjeux stratégiques spécifiques, le Framework Agile4Enterprise propose quatre modèles organisationnels pour structurer votre transformation d’entreprise et soutenir vos ambitions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
