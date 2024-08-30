"use client";
import React from 'react';
import Image from 'next/image';

interface ProjectsCardProps {
    buttonText: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ buttonText }) => {
    const openModal = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <button className="btn bg-violet-100 p-4 rounded-[20px] hover:bg-violet-300 hover:p-6" onClick={openModal}>
                <Image className="rounded-[20px]" src={"/img/games.png"} alt={"placeholder"} height={300} width={300} />
                {buttonText}
            </button>
            <dialog id="my_modal_3" className="modal w-2/3 h-3/7 rounded-[20px] bg-indigo-50">
                <div className="modal-box p-4">
                    <form method="dialog">
                        {/* If there is a button in form, it will close the modal */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            type="submit">✕</button>
                    </form>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex justify-center flex-shrink-0">
                            <Image className="rounded-[20px]" src={"/img/games.png"} alt={"this is a placeholder"} width={200} height={200} />
                        </div>
                        <div className="pl-4">
                            <h3 className="font-bold text-xl sm:text-lg">Hello!</h3>
                            <p className="py-4 text-justify sm:text-base">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ProjectsCard;