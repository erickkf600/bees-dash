import React from "react";
import { Badge } from "../../shared/styled-components/badge.style";
import typeIcon from "./../../assets/img/chart.svg";
import locationIcon from "./../../assets/img/location.svg";
import phoneIcon from "./../../assets/img/telephone.svg";
const HomeView = ({ content, deleteCard, loading }: any) => {
    return (
        <section className="infos-list container">
            {loading && <p className="infos-list__loading">Loading data...</p>}
            {!content.length && !loading && (
                <p className="infos-list__empty">
                    No contact information found!
                </p>
            )}
            {content.map((item: any, i: number) => (
                <div className="infos-list__card" key={i} data-testid="card">
                    <button
                        className="infos-list__card-delete"
                        data-testid="delete"
                        onClick={() => deleteCard(i)}
                    ></button>

                    <strong className="infos-list__card-name">
                        {item?.name}
                    </strong>
                    <div className="infos-list__card-address">
                        <p>{item?.street || "------"}</p>
                        <p>
                            {item?.city || "--"}, {item?.state || "--"},{" "}
                            {item?.country || "--"}
                        </p>
                    </div>

                    <div className="infos-list__card-badges">
                        <Badge>
                            <img src={typeIcon} alt="chart icon" />
                            {item?.brewery_type || "---"}
                        </Badge>
                        <Badge>
                            <img src={locationIcon} alt="location icon" />
                            {item?.postal_code || "---"}
                        </Badge>
                        <Badge>
                            <img src={phoneIcon} alt="phone icon" />
                            {item?.phone || "---"}
                        </Badge>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default HomeView;
