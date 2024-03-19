import React from 'react';

export default function Profile () {
  return (
    <section>
      <h2 id={"Profile"}>Profile</h2>
      <p>I am a Frontend Developer with <strong>{new Date().getFullYear()-2019} years of experience</strong> building and maintaining responsive websites.
      I worked for various clients from startups to big companies and I developed (or created from scratch) various products for the car, finance or health industries.
      My stack is primarily <strong>Javascript, Typescript, React</strong> and I include in my skills <strong>Node, Python, AWS, Docker, REST and GraphQL</strong>.</p>
      <br />
      <p>Since 2022 I am available for <strong>freelance work</strong> and I provide my expertise for Web Applications, Single Page Applications and Progressive Web Applications (PWAs).
        In my everyday work, I care deeply about users&apos; needs, performance optimization, accessibility and team communication.</p>
        <br />
    </section>
  );
}
