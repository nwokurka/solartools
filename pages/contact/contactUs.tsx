import type { NextPage } from "next";
import styled from "styled-components";
import { Card } from "../../src/components/styles/Card.style";
import { Button } from "../../src/components/styles/Button.style";
import { Input } from "../../src/components/styles/Input.style";

const ContactUsStyle = styled.div`
  height: fit-content;

  .stage-box {
    margin-top: -1rem;
    padding: 3rem 0 6rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 69vh;
  }

  .stage-box h1 {
    margin-bottom: 3rem;
  }

  .stage-box ul,
  #write-us li {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  #email-contactus {
    margin-top: 1rem;
  }

  #write-us {
    width: 45rem;
    margin: 6rem 0 0.5rem;
  }

  #write-us li {
    width: 100%;
    margin: 0.5rem 0;
  }

  #write-us li input {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.lightBackground};
    height: 3rem;
  }

  #message textarea {
    color: ${({ theme }) => theme.colors.primaryText};
    border: 1px solid ${({ theme }) => theme.colors.primaryBorder};
    background-color: ${({ theme }) => theme.colors.lightBackground};
    width: 100%;
    height: 16rem;
    padding: 0.5rem 0 0 0.3rem;

    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.highlight};
    }

    ::placeholder {
      margin: 1rem 0 0 1rem;
    }
  }

  #form-button {
    padding: 1rem 5rem;
    border-radius: 0;
  }
`;

const ContactUs: NextPage = () => {
  return (
    <ContactUsStyle>
      <Card className="stage-box">
        <h1>Contact Us</h1>
        <ul>
          <li>Electron GmbH</li>
          <li>Deichweg 2</li>
          <li>Remagen, 53424</li>
          <li>Germany</li>
          <li id="email-contactus">support@electron.com</li>
        </ul>
        <form>
          <ul id="write-us">
            <li>
              <h2>Write us</h2>
            </li>
            <li>
              <Input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                required
              />
            </li>
            <li>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                required
              />
            </li>
            <li id="message">
              <textarea
                name=""
                id="usermessage"
                placeholder="Massage"
              ></textarea>
            </li>
          </ul>
          <Button id="form-button">Send</Button>
        </form>
      </Card>
    </ContactUsStyle>
  );
};

export default ContactUs;
