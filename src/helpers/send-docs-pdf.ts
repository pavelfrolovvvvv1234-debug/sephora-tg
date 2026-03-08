/**
 * Send Terms and Privacy PDF documents.
 * @module helpers/send-docs-pdf
 */

import { InputFile } from "grammy";
import path from "path";
import { existsSync } from "fs";

const DOCS_DIR = path.join(process.cwd(), "assets", "docs");

export async function sendTermsPdf(ctx: { replyWithDocument: (doc: InputFile, opts?: object) => Promise<any> }): Promise<boolean> {
  const filePath = path.join(DOCS_DIR, "terms_ru.pdf");
  if (existsSync(filePath)) {
    await ctx.replyWithDocument(new InputFile(filePath), {
      caption: "📜 Пользовательское соглашение Sephora Hosting",
    });
    return true;
  }
  return false;
}

export async function sendPrivacyPdf(ctx: { replyWithDocument: (doc: InputFile, opts?: object) => Promise<any> }): Promise<boolean> {
  const filePath = path.join(DOCS_DIR, "privacy_ru.pdf");
  if (existsSync(filePath)) {
    await ctx.replyWithDocument(new InputFile(filePath), {
      caption: "🔒 Политика конфиденциальности Sephora Hosting",
    });
    return true;
  }
  return false;
}
