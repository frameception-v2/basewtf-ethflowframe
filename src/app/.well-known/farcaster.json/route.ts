import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header: "eyJmaWQiOiA4ODcyNDYsICJ0eXBlIjogImN1c3RvZHkiLCAia2V5IjogIjB4N0Q0MDBGRDFGNTkyYkI0RkNkNmEzNjNCZkQyMDBBNDNEMTY3MDRlNyJ9",
      payload: "eyJkb21haW4iOiAiYmFzZXd0Zi1ldGhmbG93ZnJhbWUudmVyY2VsLmFwcCJ9",
      signature: "MHhkNTM2OTkxNjZjNDg4MTkwNmZlZTNmY2YwY2ZhNmNkNTI5N2YxMDkxYzY1NDUzMDVkMDhmZGIxNGM4NWQ1ZTk3MTdhNjMxYTEyYmUxYTk0MzA4NTk3OTE3ODg2NTIyNjUxYmNmMTE1MTUwNzkyZTg4YzBiOGRiZWQ5NzA1MzUxNzFi"
    },
    frame: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Launch Frame",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
    },
  };

  return Response.json(config);
}
