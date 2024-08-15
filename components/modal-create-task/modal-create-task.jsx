import { UiButton } from "../uikit/ui-button";
import { UiFieldInput } from "../uikit/ui-field-input";
import { UiFieldLabel } from "../uikit/ui-field-label";
import { UiSelectField } from "../uikit/ui-select-field";
import { useCreateTask } from "./modal/use-create-task";

const { useEffect, useRef } = require("react");

export function ModalCreateTask({ onClose }) {
  const modalRef = useRef(null);

  const {
    userTask,
    handleCreateTask,
    handleChange,
    handleChangeSelect,
    validateForm,
    errors,
  } = useCreateTask(onClose, modalRef);

  return (
    <div className="h-screen fixed inset-0 bg-slate-900/60 backdrop-blur flex justify-center items-center overflow-y-auto">
      <div ref={modalRef} className="bg-gray-300 p-5 max-w-[90%] sm:w-[600px]">
        <form>
          <div className="flex flex-col mb-3">
            <UiFieldLabel label="Enter your task:" />
            <UiFieldInput
              type="text"
              name="task"
              value={userTask.task}
              onChange={handleChange}
              placeholder="Your task"
              errorText={errors.task}
            />
          </div>
          <div className="flex flex-col mb-4">
            <UiFieldLabel label="Enter the deadline:" />
            <UiFieldInput
              type="date"
              name="deadline"
              value={userTask.deadline}
              onChange={handleChange}
              errorText={errors.deadline}
            />
          </div>
          <div className="flex flex-col mb-4">
            <UiSelectField
              label="Choose the amount of players"
              onClick={handleChangeSelect}
              errorText={errors.category}
              options={[
                { label: "Family", value: "Family", name: "category" },
                { label: "Work", value: "Work", name: "category" },
                { label: "Study", value: "Study", name: "category" },
                {
                  label: "Health & Sport",
                  value: "Health & Sport",
                  name: "category",
                },
                { label: "Hobby", value: "Hobby", name: "category" },
                { label: "Personal", value: "Personal", name: "category" },
              ]}
            />
          </div>
          <div className="flex justify-end gap-5">
            <UiButton
              size="md"
              variant="primary"
              className="transition-colors"
              onClick={() => {
                if (validateForm()) {
                  handleCreateTask();
                }
              }}
            >
              Create Task
            </UiButton>
            <UiButton
              size="md"
              variant="outline"
              className="transition-colors"
              onClick={onClose}
            >
              Return
            </UiButton>
          </div>
        </form>
      </div>
    </div>
  );
}
