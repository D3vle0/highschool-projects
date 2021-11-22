//상품 리스트 보여주기
// components/Prototypes.jsx
import {useContext} from 'react';
import usePrototypes from '../Hooks/usePrototypes';

export default function Prototypes() {
    const prototypes = usePrototypes();
    return (
        <main>
            <div className="prototypes">상품 리스트
                {prototypes.map((prototype) => {
                    const { id, thumbnail, title, artist, desc, price, pieUrl } = prototype;
                    return (
                        <div className="prototype" key={id}>
                            <a href={pieUrl} target="_BLANK" rel="noreferrer">
                                <div style={{ padding: "25px 0 33px 0", }}>
                                    <video
                                        autoPlay
                                        loof
                                        playsInline
                                        className="prototype__artwork prototype__edit"
                                        src={thumbnail}
                                    />
                                </div>
                            </a>
                            <div className="prototype__body">
                                <div className="prototype__title">
                                    <div className="btn btn--primary float--right">
                                        <i className="icon icon--plus" />
                                    </div>
                                    {title}
                                </div>
                                <p className="prototype__price">$ {price}</p>
                                <p className="prototype__desc">{desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
