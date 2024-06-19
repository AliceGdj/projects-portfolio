import React from 'react';

export default function Profile () {
  return (
    <section>
      <h2 id={"Profile"}>Profile</h2>
      <p>I am a Software Developer with <strong>{new Date().getFullYear()-2019} years of experiences</strong> building and maintaining responsive websites.
      I worked for various clients from startups to big companies and I developed or created from scratch multiple products for the car, finance or health industries.</p>
      <br />
      <p>My stack is primarily Frontend with <strong>Javascript, Typescript, React and Next</strong> but my skills also include <strong>Node, Python, AWS, REST and GraphQL</strong>.</p>
      <br />
      <p>Since 2022 I am available for <strong>freelance work</strong> and I provide my expertise for <strong>Web Applications, Single Page Applications</strong> and <strong>Progressive Web Applications</strong>.
        In my everyday work, I care deeply about users&apos; needs, performance optimization, accessibility and team communication.</p>
        <br />
    </section>
  );
}
