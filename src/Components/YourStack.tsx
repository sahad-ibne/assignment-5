import { FiX } from "react-icons/fi";
import type { ITech } from "../TechType";

interface YourStackProps {
  stack: ITech[];
  RemoveFromStack: (id: string) => void;
  ClearStack: () => void;
}

const YourStack = ({
  stack,
  RemoveFromStack,
  ClearStack,
}: YourStackProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sticky top-24">
      <h3 className="text-xl font-bold text-slate-900">Your Stack</h3>

      <p className="text-slate-400 text-xs mt-1 mb-6">
        {stack.length > 0
          ? `${stack.length} ${stack.length === 1 ? "Technology" : "Technologies"} Selected`
          : "No technologies selected yet."}
      </p>
      {stack.length === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-xl p-8 text-center text-slate-400 text-sm">
          Your stack is empty.
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-white"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-none">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => RemoveFromStack(item.id)}
                  className="text-slate-400 p-1"
                
                >
                  <FiX className="text-lg" />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={ClearStack}
            className="w-full mt-4 border border-rose-200 text-rose-500 font-semibold text-sm py-2.5 rounded-xl"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;