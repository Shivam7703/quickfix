import React from "react";
// import { usePathname } from "next/navigation";

const productCategories = [
  {
    category: "All Purpose Adhesive",
    products: ["Quickfix"],
  },
  {
    category: "Cyanoacrylate",
    products: ["Superglue", "Durobond", "Superglue HV"],
  },
  {
    category: "Fragrant Gum",
    products: ["Quickgum", "Glupen"],
  },
  {
    category: "White Adhesive",
    products: ["Quickkraft"],
  },
  {
    category: "Rubber Based Adhesive",
    products: ["Durofix", "SR-535", "SR-525", "SP-500 Sprayable"],
  },
  {
    category: "Epoxy Putty",
    products: ["Quickseal", "Quickseal Rapid", "Quickseal Sanitary"],
  },
  {
    category: "Epoxy",
    products: ["Quicktite"],
  },
  {
    category: "Thread Sealant",
    products: ["PTFE Tape", "Quickplumb"],
  },
  {
    category: "PVC Electrical Tape",
    products: ["PV Shield"],
  },
  {
    category: "Solvent Cement",
    products: [
      "CPVC",
      "PVC",
      "PVFix",
      "UPVC",
      "UPVC Clear",
      "Multipurpose",
      "Quickguard",
    ],
  },
  {
    category: "Ball Valve",
    products: ["CPVC Ball Valve", "UPVC Ball Valve"],
  },
  {
    category: "Drain Cleaner",
    products: ["DrainQure"],
  },
  {
    category: "Wood Adhesive",
    products: ["Quickcol SH"],
  },
  {
    category: "Binder",
    products: ["Quickcol WDB"],
  },
  {
    category: "NC Thinner",
    products: ["Wemlac"],
  },
  {
    category: "Paint Stripper",
    products: ["Paint Stripper"],
  },
  {
    category: "Tile Cleaner",
    products: ["TileQure"],
  },
];

export default function Productside() {
    // const pathname = usePathname();

  const activeProduct = "Superglue"; // Change dynamically if needed

  return (
    <aside className="w-full space-y-4">
      {productCategories.map((item) => (
        <div
          key={item.category}
          className="bg-white border border-gray-200 shadow-lg p-3 rounded-xl"
        >
          <h2 className="text-base font-semibold uppercase text-slate-900 mb-2">
            {item.category}
          </h2>

          <ul className="border border-gray-300 rounded-lg">
            {item.products.map((product) => (
              <li
                key={product}
                className="border-b border-gray-300 last:border-b-0"
              >
                <button
                  className={`w-full text-left px-5 py-2 transition-all duration-300 font-medium
                  ${
                    product === activeProduct
                      ? "bg-blue-700 text-white"
                      : "bg-white text-gray-700 hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {product}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}