import { createElement, HTMLAttributes } from "react";
import sanitize from "sanitize-html"

type htmlSanitizer = {
   tag: string;
   cleanHtml: string;
} & HTMLAttributes<HTMLElement>

export function SanitizeHTML({tag, cleanHtml, ...rest}: htmlSanitizer){

   const sanitizedHtml = sanitize(cleanHtml, {
      allowedTags: []
    });

   return(
      createElement(
         tag,
         {...rest},
         sanitizedHtml
      )
   )
}