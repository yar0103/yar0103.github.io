const ProjectCard = ({ item }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="ratio ratio-16x9">
          <iframe src={item.video} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">
            {item.subTitle}<br /><br />
            {item.mainFunction}<br /><br />
            {item.result}<br /><br />
            <button type="button" className="btn btn-secondary">
              <a href={item.link}>구경가기</a>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;