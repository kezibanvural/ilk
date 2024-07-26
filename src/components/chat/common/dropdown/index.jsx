"use client"
import AttachmentFile from "@/components/chat/common/attach-file";
import { useRef } from "react";
import subjects from "./subjects.json";
import { swalToast } from "@/helpers/swal";
import Image from "next/image";
import "./style.scss"

export default function Dropdown({setFiles, isLoading, setIsLoading}) {
  const ddRef =useRef();

  isLoading && ddRef.current.classList.remove("show");

  const handleSubjectChoose = (subject) => { 
    const result = ddRef.current.classList.contains("show");
    console.log("result", result);
    if(result ){
      ddRef.current.classList.remove("show")
    }
    swalToast(`${subject.innerText} choosen`, "success", "bottom-end")
   }

  return (
    <div className="dropup chat-options-dropup">
      <a
        className={`dropdown-attach-icon`}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        <Image src={"/icons/ui/icons/State=DefaultName=Attach.svg"} width={25} height={25} alt="attach-icon"/>
      </a>
      <ul className="dropdown-menu" ref={ddRef}>
      <li className="dropend">
          <a 
            className="dropdown-item dropdown-toggle" 
            href="#"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
            >
            Grades
          </a>
          <ul className="dropdown-menu">
            
            {
              subjects.classes.map((subject)=>(
                <li className="dropend" key={subject.class_id}>
              <a 
                href="#" 
                className="dropdown-item dropdown-toggle"
                data-bs-toggle="dropdown"
                >
                {`${subject.class_id}. Grade`}
              </a>
              <ul className="dropdown-menu">
                {
                  subject.subjects.map((item)=>(
                    <li key={item.subject_id}><option href="#" className="dropdown-item" style={{cursor:"pointer"}} value={item.subject_id} onClick={(e) =>handleSubjectChoose(e.target)}>{item.subject_name}</option></li>
                  ))
                }
              </ul>
            </li>
              ))
            }
          </ul>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <AttachmentFile setFiles={setFiles} setIsLoading={setIsLoading} />
          </a>
        </li>
      </ul>
    </div>
  );
}
