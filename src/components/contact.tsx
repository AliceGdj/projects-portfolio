import React from 'react';
import Link from 'next/link';

export default function Contact () {
  return (
    <section>
      <h2 id={"Contact"}>Contact</h2>
      <br />
      <p>Do you want us to work together?</p> 
      <p>Feel free to contact me at : <strong><u>alice.grandj.49@gmail.com</u></strong></p>
      <br />
      <Link href="mailto:alice.grandj.49@gmail.com">Send me an email</Link>
      <br />
      <br />
      <br />
    </section>
  );
}
