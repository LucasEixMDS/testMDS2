
import "./commentSinscrire.scss";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

const CommentSinscrire = () => {
    return (
        <div className="comment">

                <Helmet>
                    <title>Comment s'inscrire en formation ? - Mélodie des Sens </title>
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/comment-s-inscrire-en-formation" />
                    <meta name="description" content="Chez MDS Formations, nous avons simplifié le processus d'inscription pour nos formations en bien-être et de la beauté." />
                </Helmet>
            
            <div className="headerComment">
                <h1>Comment s’inscrire en formation ?</h1>
                <h2>Votre chemin vers une carrière épanouissante commence ici !</h2>
            </div>


        <div className="commentContainer">
            <p className="commentFirstText">
            Chez MDS Formations, nous avons simplifié le processus d'inscription pour nos formations en bien-être et de la beauté. Notre démarche d'accompagnement vise à rendre votre inscription aussi fluide que possible. Voici comment vous pouvez vous inscrire en quelques étapes simples :
            </p>

            <h2><span>Étape 1 :</span> choisissez votre formation</h2>

            <p>La première étape pour entamer votre parcours vers une carrière épanouissante est de <strong>parcourir notre sélection de formations sur notre site web</strong> ou<strong> téléchargez notre catalogue de formation.</strong> Explorez les différentes options de cours et trouvez celui qui correspond le mieux à vos objectifs professionnels et à vos intérêts.</p>
            <button>Télécharger notre catalogue</button>

        </div>

        <div className="commentContain">
        <h2><span>Étape 2 :</span> options d'inscriptions</h2>

        <p>Une fois que vous avez choisi la formation qui vous convient, plusieurs options s'offrent à vous :</p>

            <div className="commentExplain">
                <div className="commentDiv">
                        <div className="itemsComment">
                            <div className="topContainer">
                                <div className="icon">
                                    <span className="h2">Tous savoir sur une formation</span>
                                    <span className='date'>Toutes les informations dont vous avez besoin.</span>
                                </div>
                            </div>
                            
                            <div className="bottomContainer">
                                <div className="buttons">
                                    <Link to="/inscription"><button>En savoir +</button></Link>
                                </div>
                            </div>
                        </div>

                        <p><strong>Demande de documentation :</strong> si vous souhaitez en savoir plus sur <strong>le contenu de la formation, 
                            les horaires, et les tarifs</strong>, vous pouvez remplir notre <strong>formulaire de demande </strong> 
                            de documentation en ligne. Nous vous enverrons toutes les informations nécessaires.</p>
                </div>
            </div>

            <p className="commentTextContact"><strong>Contactez-nous :</strong> si vous avez des questions spécifiques ou si vous préférez une assistance personnelle, n'hésitez pas à nous contacter </p>
            <p><strong>Par e-mail ou par téléphone :</strong> Notre équipe est là pour répondre à toutes vos questions.</p>

            <Link to="/inscription"><button className="commentButtonContact">Nous contacter</button></Link>

            </div>


            <div className="commentFinish">
                <div className="commentContainer">
                    <h2><span>Étape 3 :</span> planification des sessions de formation</h2>    
                    <p>Une fois que vous avez choisi votre formation, nous travaillerons avec vous pour planifier les dates de sessions qui correspondent à la fois à notre calendrier de formation et à vos disponibilités.</p>
                </div>  
                <div className="commentContainer">
                    <h2><span>Étape 4 : </span>choix du financement</h2>
                    <p>Nous comprenons que le financement peut être une préoccupation majeure. Nous offrons une variété d'options de financement, notamment le financement personnel, le Compte Personnel de Formation (CPF), les Organismes Paritaires Collecteurs Agréés (OPCO), et les aides de Pôle Emploi. </p>
                    <p>Si vous choisissez le financement personnel, vous avez également la possibilité de le diviser en plusieurs mensualités sans frais supplémentaires.</p>
                    <Link to="/different-financement"><button>En savoir +</button></Link>
                    <p>Pour en savoir plus sur l'utilisation de votre CPF, consultez notre page dédiée sur "Comment Utiliser son CPF."</p>
                    <Link to="/utiliser-son-cpf"><button>En savoir +</button></Link>
                </div>
                <div className="commentContainer">
                    <h2><span>Étape 5 :</span> finalisation de l’inscription</h2>    
                    <p>Enfin, une fois que tout est en ordre, nous finaliserons les derniers documents administratifs nécessaires à votre inscription en formation. </p>
                    <p>Une fois cela fait, vous serez officiellement inscrit et prêt à commencer votre voyage vers une carrière passionnante dans le bien-être et la beauté.</p>
                    <p>Chez MDS Formations, nous sommes déterminés à vous accompagner à chaque étape de votre inscription en formation. N'hésitez pas à nous contacter si vous avez des questions ou si vous avez besoin d'assistance supplémentaire. Nous sommes là pour vous aider à réaliser vos rêves professionnels.</p>
                    <Link to="/inscription"><button>Nous contacter</button></Link>
                </div>  
            </div>

        </div>
    );
};

export default CommentSinscrire;
