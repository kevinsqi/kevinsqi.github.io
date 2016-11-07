import React from 'react';

const Project = ({ name, image, url, links, children }) => {
  const primaryUrl = links[0].url;
  return (
    <div className="row mb-1">
      <div className="col-xs-12 col-sm-6">
        <div className="text-xs-center">
          <a href={primaryUrl}>
            <img className="img-fluid rounded mb-1" src={image} />
          </a>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <h3><a href={primaryUrl}>{name}</a></h3>
        {children}

        <ul className="list-unstyled mt-1">
          {links.map(({ text, url, icon }) => <li key={url}><i className={`text-muted fa ${icon || 'fa-external-link'}`} style={{ width: '1em', marginRight: '0.3em' }}></i> <a href={url}>{text}</a></li>)}
        </ul>
      </div>
    </div>
  );
};

export default Project;
