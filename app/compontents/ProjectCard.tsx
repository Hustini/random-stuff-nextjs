"use client";
import React from 'react';
import Image from 'next/image';

const ProjectsCard: React.FC = () => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <>
            <button className="btn bg-violet-100 p-4 rounded-[20px] hover:bg-violet-300" onClick={openModal}>Open Modal</button>
            <dialog id="my_modal_3" className="modal lg:w-2/3 lg:h-3/7">
                <div className="modal-box rounded-[20px] p-4">
                    <form method="dialog">
                        {/* If there is a button in form, it will close the modal */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            type="submit">✕</button>
                    </form>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex justify-center lg:justify-start">
                            <Image src={"/img/games.png"} alt={"this is a placeholder"} width={200} height={200} className="w-1/2 lg:w-auto" />
                        </div>
                        <div className="pl-4 mt-4 lg:mt-0">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4 text-justify">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ProjectsCard;