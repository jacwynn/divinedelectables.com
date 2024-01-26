import { google } from 'googleapis';
export async function getMenuData(menuName) {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: menuName, // sheet name
    });

    const data = response.data.values.slice(1);
    const menuData = convertData(menuName, data);

    return menuData;
  } catch (err) {
    console.log(err);
  }

  return [];
}

function convertData(menuName, data) {

    if (menuName === 'BuildYourPicnic') {
        let menu = {
            pageTitle: null,
            description: null,
            menuSection: {
                intro: null,
                options: [],
            },
            categories: {
                entrees: [],
                sides: [],
                salads: [],
                desserts: [],
            },
            additionalItems: [],
        };
    
        data.forEach((row, index) => {
            if (index === 0) {
                menu.pageTitle = row[0];
                menu.description = row[1];
                menu.menuSection.intro = row[2];
            }
        
            if (row[3]) {
                menu.menuSection.options.push({
                    name: row[3],
                    price: row[4],
                    description: row[5],
                });
            }
        
            if (row[6]) {
                menu.categories.entrees.push(row[6]);
            }
            // Similar condition checks would be required for sides, salads, desserts, additionalItems if data was available.
        });
        
        return menu;
    }
}