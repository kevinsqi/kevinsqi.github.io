/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import img_profile_pic from './profile-pic.jpg';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <img
        src={img_profile_pic}
        alt={author}
        className="rounded-circle"
        style={{ width: 70, height: 70 }}
      />
      <p className="ml-3">
        Personal blog by <strong>{author}</strong>.
      </p>
    </div>
  );
};

export default Bio;
