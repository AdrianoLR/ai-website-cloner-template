import { Fragment } from "react";

import type { RichBlock, RichInline } from "@/types/patricia-amorim";

const blockClasses: Record<RichBlock["tag"], string | undefined> = {
  h1: "text-[38px] leading-[44px] font-bold",
  h2: "text-[32px] leading-[36px] font-bold",
  h3: "text-[24px] leading-[30px] font-bold",
  h4: "my-[10px] text-[18px] leading-[24px] font-bold",
  p: undefined,
  blockquote:
    "mb-[10px] border-l-[5px] border-[#e2e2e2] px-[20px] py-[10px] text-[18px] leading-[22px]",
};

export function RichInlines({ nodes }: { nodes: RichInline[] }) {
  return nodes.map((node, index) => {
    if (typeof node === "string") return <Fragment key={index}>{node}</Fragment>;
    if (node.tag === "br") return <br key={index} />;
    if (node.tag === "a") {
      return (
        <a key={index} href={node.href}>
          <RichInlines nodes={node.children} />
        </a>
      );
    }
    const Tag = node.tag;
    return (
      // The source renders <strong> at 700 even inside bold headings.
      <Tag key={index} className={node.tag === "strong" ? "font-bold" : undefined}>
        <RichInlines nodes={node.children} />
      </Tag>
    );
  });
}

/** CMS rich text: headings, paragraphs and quotes with inline emphasis. */
export function RichText({ blocks, className }: { blocks: RichBlock[]; className?: string }) {
  return (
    <div className={className}>
      {blocks.map((block, index) => {
        const Tag = block.tag;
        return (
          <Tag key={index} className={blockClasses[block.tag]}>
            <RichInlines nodes={block.children} />
          </Tag>
        );
      })}
    </div>
  );
}
