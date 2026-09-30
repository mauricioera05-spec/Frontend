function TitleCard({image, alt, title, subtitle, date}){


    

    return(

        <article className="title-card">
            <figure className="title-card__media">
                <img src={image} alt={alt} height="100" width="105" className="title-card__image"/>
            </figure>

            <div className ="title-card__content">
                <h2 className="title-card__title">{title}</h2>
                <p className="title-card__subtitle">{subtitle}</p>
                <time className="title-card__date" dateTime={date}>{date}</time>
            </div>
        </article>

    );
}

export default TitleCard;