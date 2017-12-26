import React from 'react'

    const WatchlistCard = ({title, poster, overview, release, rating, onClick}) => (

        <div class="WatchlistCard">
            <img class="WatchlistCard__img" src="" alt=""/>
            <div class="WatchlistCard__body">
                <h3 class="WatchlistCard__title"></h3>
                <p class="WatchlistCard__release"></p>
                <p class="WatchlistCard__rating"></p>
                <button class="WatchlistCard__btn">-</button>
            </div>
        </div>
        );
export default WatchlistCard;