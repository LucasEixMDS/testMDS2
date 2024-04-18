 import "./homeModalite.scss";
 import { Link } from "react-router-dom";

const Modalite = () => {
    return (
        <div className="modalite_Formation">
           <h3 className="titreh3">Des formations <span>adaptées à vos besoins</span></h3>
            <p className="modalite-desktop">Lorsque vous vous inscrivez à l'une de nos formations, nous vous offrons un avantage inestimable : un accès complet et gratuit à notre plateforme de formation en ligne pendant toute la durée de votre apprentissage. Notre plateforme de formation constitue un centre de ressources essentiel pour vous aider à exceller dans votre parcours de formation</p>
            <div className="container_modalite">
                <div className="container_modalite_left">
                    <div className="container_left_modal">
                        <div className="icon_container">
                            <div className="icon">
                                <p><img src="/ecole.svg" alt="icon apple d'une ecole" /></p>
                            </div>
                        </div>
                        <div className="h3_container">
                            <span className="h3">Nos formations en ligne</span>
                        </div>
                        <div className="modalite_container_button_left">
                        <Link to={"/formations-distanciel"} ><button>Découvrir</button></Link>
                        </div>
                    </div>
                    <p>
                    Vous souhaitez suivre une formation à votre rythme et flexible ? Optez pour la formation 100 % en ligne.
                    </p>
                </div>
                <div className="container_modalite_right">
                    <div className="container_right_modal">
                        <div className="icon_container">
                            <div className="icon">
                                <p><img src="/maison.svg" alt="icon apple d'une maison" /></p>
                            </div>
                        </div>
                        <div className="h3_container">
                            <span className="h3">Nos formations en présentiel</span>
                        </div>
                        <div className="modalite_container_button_right">
                        <Link to={"/toutes-nos-formations"} ><button>Découvrir</button></Link>
                        </div>
                    </div>
                    
                    <p>Vous souhaitez assiter physiquement aux cours et vaforiser le contact ? Optez pour la formation en présentiel.</p>
                </div>
                </div>
                <h3 className="h4">Cours, protocoles, vidéos de démonstrations et exercices, réalisés pour vous !</h3>
        </div>
    );
};

export default Modalite;
