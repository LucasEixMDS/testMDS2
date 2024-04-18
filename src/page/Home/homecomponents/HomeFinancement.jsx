import { Link } from 'react-router-dom';

const HomeFinancement = () => {
    return (
        <div>
            <div className="homePage">
            <div className="home">
            <div className="financementHome">
                <h2 className='h3'>Financement à <span>100%</span> de vos formations : saisissez l'opportunité dès maintenant !</h2>
                <p className="text_financement">Formez-vous sans contrainte financière et donnez un nouvel élan à votre carrière. Inscrivez-vous aujourd'hui et bénéficiez du financement intégral de vos formations. Contactez-nous pour commencer votre parcours vers le succès.</p>
                <p className="opco"><strong>CPF, Pôle emploi, alternance, employeurs...</strong></p>
                <p className="desktopText"> Vous aspirez à élargir vos compétences professionnelles sans que cela ne pèse sur votre budget ? Chez MDS Formations, nous avons la solution. Inscrivez-vous dès aujourd'hui et bénéficiez d'un financement complet de votre formation grâce à des options telles que le CPF (Compte Personnel de Formation), Pôle emploi, Transition pro, les opcos, la région, l'alternance, en financement personnel,  ou encore une prise en charge par votre employeur. 
                <br /><br /> Contactez-nous pour débuter votre parcours vers la réussite. Chez MDS Formations, nous rendons l'investissement dans votre avenir simple et abordable. Rejoignez-nous pour explorer de nouvelles opportunités professionnelles.</p>
                <div className="button_home_financement">
                <Link to="/different-financement" > <button className="button_savoir">En savoir +</button></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default HomeFinancement;