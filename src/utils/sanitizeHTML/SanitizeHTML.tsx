import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html";

type HtmlSanitizerProps = {
  tag: string;
  cleanHtml: string;
} & HTMLAttributes<HTMLElement>;

export function SanitizeHTML({ tag: tagName, cleanHtml, ...rest }: HtmlSanitizerProps) {
  // Sanitiza el HTML
  const sanitizedHtml = sanitize(cleanHtml, {
    allowedTags: ['h1', "h2", "h3", 'p', 'strong', 'em', "div", "class", "img", "figure", 'ul', 'li', 'a', "b"],
    allowedAttributes: {
      'div': ["style", "class"],
      'img': ["width", "height", "src","class"],
      'figure': ["class"],
    }
  });

  // Usa dangerouslySetInnerHTML para renderizar el HTML sanitizado
  return createElement(
    tagName,
    { ...rest, dangerouslySetInnerHTML: { __html: sanitizedHtml } }
  );
}
