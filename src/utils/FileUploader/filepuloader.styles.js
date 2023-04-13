import styled from "styled-components";

export const FileUploaderComponent = styled.div`
display: flex;
gap: 30px;
position: relative;
height: 300px;

.frame {
	position: relative;
	top: 0;
	left: 0;
	width: 350px;
	height: 310px;
	border-radius: 2px;
	box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
	overflow: hidden;
	background: linear-gradient(to top right, rgb(251, 99, 115) 0%, hotpink 100%);
	color: #333;
	font-family: "Open Sans", Helvetica, sans-serif;
}
.center {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	height: 260px;
	border-radius: 3px;
	box-shadow: 8px 10px 15px 0 rgba(0, 0, 0, 0.2);
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
 

 .title {
  width: 100%;
	height: 50px;
	border-bottom: 1px solid #999;
	text-align: center;
 }
 .dropzone {
display: flex;
flex-direction: column;
align-items: center;
	border-radius: 3px;
	text-align: center;
 cursor: pointer;
 .upload-icon {
  width: 100px;
	height: 80px;
	margin: 2px;
}
.upload-input {
	position: absolute;
	top: 0px;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
 cursor: pointer;
}
button {
 padding: 8px 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(223, 223, 223, 0.5);
    font-family: var(--body-font);
    font-size: 0.9rem;
    max-width: 200px;
    color: var(--main-white);
    background-color: rgb(251, 99, 115);
    transition: scale 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
     scale: 1.03;
    }
}
}
}
.confirmation {
 display: flex;
 flex-direction: column;
 gap: 15px;
 .preview {
 max-height: 230px;
 aspect-ratio: 4/3;
 width: auto;
 object-fit: cover;
}
 .button {
 padding: 8px 15px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    background-color: rgba(223, 223, 223, 0.5);
    font-family: var(--body-font);
    font-size: 0.9rem;
    max-width: 200px;
    cursor: pointer;
    color: var(--main-white);
    background-color: rgb(251, 99, 115);
    transition: scale 0.3s ease-in-out;
				text-align: center;
    &:hover {
     scale: 1.03;
    }
}
}
`

