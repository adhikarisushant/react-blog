import "./post.css"

export default function Post() {
    return (
        <div className="post">
                <img 
                className="postImg"
                src="https://www.worldatlas.com/r/w768/upload/de/67/b5/shutterstock-215706271.jpg" alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet consectetur.
                    </span>
                    <hr />
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis delectus odit ex enim quas praesentium nemo id vel accusamus!                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis delectus odit ex enim quas praesentium nemo id vel accusamus!                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis delectus odit ex enim quas praesentium nemo id vel accusamus!                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis delectus odit ex enim quas praesentium nemo id vel accusamus!                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi officiis delectus odit ex enim quas praesentium nemo id vel accusamus!
                </p>
        </div>
    )
}
