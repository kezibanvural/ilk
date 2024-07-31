import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';

const ChatHistoryAccordion = ({ allChatHistoryData }) => {
  const dateNow = moment();
  const last7Days = moment().subtract(7, 'days');

  const todayData = allChatHistoryData.filter(item => 
    moment(item.timestamp).isSame(dateNow, 'day')
  );

  const last7DaysData = allChatHistoryData.filter(item => 
    moment(item.timestamp).isAfter(last7Days) && !moment(item.timestamp).isSame(dateNow, 'day')
  );

  const beforeData = allChatHistoryData.filter(item => 
    moment(item.timestamp).isBefore(last7Days)
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
                      {todayData?.map((item) => (
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
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseLastWeek"
                    aria-expanded="true"
                    aria-controls="collapseLastWeek"
                  >
                    Last Week
                  </button>
                </h2>
                <div
                  id="collapseLastWeek"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#chatHistory"
                >
                  <div className="accordion-body">
                    <ul>
                      {last7DaysData?.map((item) => (
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
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBefore"
                    aria-expanded="true"
                    aria-controls="collapseBefore"
                  >
                    Before
                  </button>
                </h2>
                <div
                  id="collapseBefore"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#chatHistory"
                >
                  <div className="accordion-body">
                    <ul>
                      {last7DaysData?.map((item) => (
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
