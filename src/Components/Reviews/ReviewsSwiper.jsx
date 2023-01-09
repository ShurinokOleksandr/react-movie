import React, {useState} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Reviews = () => {
    const [text,setText] = useState(false)

    return (
        <div className={'Reviews'}>
            <div className="Reviews__Content">
                <div className="Reviews__Content-Title">
                    <h1>Отзывы</h1>
                </div>
                <div className="Reviews__Content-Inner">
                    <div className="Inner__Block">
                        <div className="Inner__Block-Title">
                            <div className="ImgTitle">
                                <img src="f" alt="img"/>
                            </div>
                            <div className="NameTitle">
                                <div className="NameRating">
                                    <h2 className="Name">Name</h2>
                                    <span className="rating"><StarBorderIcon className={'star'}/>63</span>
                                </div>
                                <div className="DateReviews">12 december</div>
                            </div>
                        </div>
                        <div className="Inner__Block-Body">
                            <div  className="Text">
                                <p onClick={() => setText(!text)} className={text  ? "About" : "About spec"}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam animi architecto commodi consequatur corporis doloribus dolorum earum eos exercitationem explicabo fugit harum, ipsa iusto labore laudantium maiores minus mollitia nemo neque odio optio pariatur, quia quisquam repellat repellendus sapiente suscipit totam ullam veniam veritatis, vero vitae voluptates. A ab ad alias assumenda blanditiis commodi consequuntur culpa cumque debitis, deserunt dicta distinctio dolorem doloremque doloribus eos ex facilis fugiat harum ipsum iure nam nesciunt nostrum numquam obcaecati officia optio porro possimus praesentium provident quidem quis quod reiciendis soluta totam ut voluptatibus voluptatum. Corporis deleniti, distinctio hic inventore quam reprehenderit sapiente!
                                </p>
                                <span onClick={() => setText(!text)} className={"Show"} >{text ? "Закрыть" : "Развернуть"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;