import Link from "next/link";
import Image from "next/image";
import moment from "moment";

const ChatHistoryAccordion = ({ allChatHistoryData }) => {
  const dateNow = moment();
  const lastWeekStart = moment().subtract(6, "days").startOf("day");

  const todayData = allChatHistoryData.filter((item) =>
    moment(item.timestamp).isSame(dateNow, "day")
  );

  const lastWeekData = allChatHistoryData.filter(
    (item) =>
      moment(item.timestamp).isBetween(lastWeekStart, dateNow, "day", "[]") &&
      !moment(item.timestamp).isSame(dateNow, "day")
  );

  const beforeData = allChatHistoryData.filter((item) =>
    moment(item.timestamp).isBefore(lastWeekStart, "day")
  );

  return (
    <div className="accordion" id="chatHistory">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseToday"
            aria-expanded="true"
            aria-controls="collapseToday"
          >
            Today
          </button>
        </h2>
        <div
          id="collapseToday"
          className="accordion-collapse collapse show"
          data-bs-parent="#chatHistory"
        >
          <div className="accordion-body">
            <ul>
              {todayData?.reverse().map((item) => (
                <li key={item.session_id} title={item.first_question}>
                  <Link href={`/chat/${item.session_id}`}>
                    <Image
                      src="/icons/actions/file/State=Default.svg"
                      height={24}
                      width={24}
                      alt="file-icon"
                    />
                    <span>{item.first_question.charAt(0).toUpperCase() + item.first_question.slice(1)}</span>
                  </Link>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="icons/ui/icons/ellipsis-icon.svg"
                        width={21.6}
                        height={4.45}
                        alt="ellipsis-icon"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Share.svg"
                            width={20}
                            height={20}
                            alt="share-icon"
                          />
                          <span>Share</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Rename.svg"
                            width={19}
                            height={20}
                            alt="book-icon"
                          />
                          <span>Rename</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Archive.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Archive</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Clear.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Delete</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseLastWeek"
            aria-expanded="false"
            aria-controls="collapseLastWeek"
          >
            Last Week
          </button>
        </h2>
        <div
          id="collapseLastWeek"
          className="accordion-collapse collapse"
          data-bs-parent="#chatHistory"
        >
          <div className="accordion-body">
            <ul>
              {lastWeekData?.reverse().map((item) => (
                <li key={item.session_id} title={item.first_question}>
                  <Link href={`/chat/${item.session_id}`}>
                    <Image
                      src="/icons/actions/file/State=Default.svg"
                      height={24}
                      width={24}
                      alt="file-icon"
                    />
                    <span>{item.first_question}</span>
                  </Link>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="icons/ui/icons/ellipsis-icon.svg"
                        width={21.6}
                        height={4.45}
                        alt="ellipsis-icon"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Share.svg"
                            width={20}
                            height={20}
                            alt="home-icon"
                          />
                          <span>Share</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Rename.svg"
                            width={19}
                            height={20}
                            alt="book-icon"
                          />
                          <span>Rename</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Archive.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Archive</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Clear.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Delete</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBefore"
            aria-expanded="false"
            aria-controls="collapseBefore"
          >
            Before
          </button>
        </h2>
        <div
          id="collapseBefore"
          className="accordion-collapse collapse"
          data-bs-parent="#chatHistory"
        >
          <div className="accordion-body">
            <ul>
              {beforeData?.reverse().map((item) => (
                <li key={item.session_id} title={item.first_question}>
                  <Link href={`/chat/${item.session_id}`}>
                    <Image
                      src="/icons/actions/file/State=Default.svg"
                      height={24}
                      width={24}
                      alt="file-icon"
                    />
                    <span>{item.first_question}</span>
                  </Link>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Image
                        src="icons/ui/icons/ellipsis-icon.svg"
                        width={21.6}
                        height={4.45}
                        alt="ellipsis-icon"
                      />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Share.svg"
                            width={20}
                            height={20}
                            alt="home-icon"
                          />
                          <span>Share</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Rename.svg"
                            width={19}
                            height={20}
                            alt="book-icon"
                          />
                          <span>Rename</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Archive.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Archive</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="/chat">
                          <Image
                            src="/icons/ui/icons/State=Default,Name=Clear.svg"
                            width={20}
                            height={20}
                            alt="user-icon"
                          />
                          <span>Delete</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHistoryAccordion;
