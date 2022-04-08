import React from "react";

function Contacts() {
  return (
    <div className="contacts-section section w-100 text-light">
      <h2 className="section-title text-light">Contacts</h2>
      <div className="section-body">
        <div>
          Email <a href="mailto:elia_99@live.it">elia_99@live.it</a>
        </div>
        <div>
          Repositories{" "}
          <a href="https://github.com/eliams99?tab=repositories">GitHub</a>
        </div>

        <div className="section-body skills-container">
          <div className="languages text-start">
            <h5 className="text-light">Information</h5>
          </div>
          <div className="languages text-start">
            <h5 className="text-light">Social</h5>

            <div>
              <a href="https://www.linkedin.com/in/elia-musiu/">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
