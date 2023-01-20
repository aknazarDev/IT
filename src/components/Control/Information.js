import React from 'react';

const Information = () => {
    return (
        <>
            <section id="information">
                <div className="container">
                    <div className="information--general">
                        <div className="information--general__texts">
                            <h4>Как работает многопоточность в Java? Старая добрая <br/>многопоточность в Java — это
                                базовые примитивы <br/>многопоточности:</h4>
                            <ul>
                                <li>Threads (потоки);</li>
                                <li>Synchronization (синхронизация);</li>
                                <li>Wait/notify (ожидание/уведомление).</li>
                            </ul>
                            <div className="information--general__texts--text">
                                <h4>Сложно писать, сложно отлаживать, сложно <br/>тестировать.</h4>
                                <ul>
                                    <li>Java 5 Future interface:</li>
                                    <li>V get()</li>
                                    <li>boolean cancel() V get()</li>
                                    <li>boolean isCancelled()</li>
                                    <li>boolean isDone()</li>
                                    <li>Executors</li>
                                    <li>Callable interface</li>
                                    <li>BlockingQueue</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Information;