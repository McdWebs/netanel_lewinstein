import React from "react";
import styles from "../../styles/style.module.css";

const PolicySupport = () => {
  return (
    <div className={`${styles.policyWrapper} ${styles.rtl}`}>
      <h1 className={styles.titlePolicy}>מדיניות ותמיכה</h1>
      <p className={`${styles.policyText} ${styles.welcomeText}`}>
        ברוכים הבאים לדף המדיניות והתמיכה שלנו. כאן תוכלו למצוא את כל המידע
        הדרוש בנוגע לתנאים, מדיניות התשלום וההחזרות, הגנת הפרטיות, ותמיכה לאחר
        הצילום.
      </p>
      <h2 className={styles.policyHeading}>מדיניות כללית</h2>
      <p className={styles.policyText}>
        אנו מחויבים לספק שירות צילום מקצועי ברמה הגבוהה ביותר תוך שמירה על
        חוויית לקוח יוצאת דופן. כדי לשמור על שקיפות, להלן מספר נהלים עיקריים
        שחשוב להכיר:
      </p>
      <h2 className={styles.policyHeading}>קביעת מועדים וזמינות</h2>
      <p className={styles.policyText}>
        יש לתאם את תאריך ושעת הצילום מראש, בהתאם לזמינות. אנחנו נעשה את המיטב
        לעמוד בלוחות הזמנים שנקבעו.
      </p>
      <h2 className={styles.policyHeading}>תשלום</h2>
      <p className={styles.policyText}>
        התשלום מתבצע בעת ההזמנה, או בהתאם להסכמה אחרת מראש. ניתן לשלם במגוון
        אמצעים, כולל מזומן, העברה בנקאית או PayBox.
      </p>
      <h2 className={styles.policyHeading}>מקדמות והחזרים</h2>
      <p className={styles.policyText}>
        במקרים של ביטול מצד הלקוח, תיתכן החזרת מקדמה, בהתאם למועד הביטול ולהסכם.
        ביטול ברגע האחרון עלול שלא להוביל להחזר. במקרה של דחיית אירוע, נשתדל
        למצוא מועד חלופי.
      </p>
      <h2 className={styles.policyHeading}>הגבלת אחריות</h2>
      <p className={styles.policyText}>
        הצוות שלנו מחויב לשמור על זהירות ומקצועיות. עם זאת, אנו לא אחראים לנזקים
        העלולים להיגרם עקב נסיבות בלתי צפויות או מקרי חירום שאינם בשליטתנו.
      </p>
      <h2 className={styles.policyHeading}>הגנת פרטיות</h2>
      <p className={styles.policyText}>
        אנחנו מתייחסים לפרטיות הלקוחות ברצינות. התמונות שצולמו לא ישותפו עם צד
        שלישי או יוצגו בפומבי ללא הסכמתכם המפורשת. הנתונים האישיים שתספקו ישמשו
        לצורך תקשורת בנוגע לשירות בלבד.
      </p>
      <h2 className={styles.policyHeading}>זכויות יוצרים ושימוש בתמונות</h2>
      <p className={styles.policyText}>
        התמונות המתקבלות הן לשימוש פרטי בלבד, אלא אם הוסכם אחרת בכתב. אנו עשויים
        לבקש רשות להשתמש בתמונות למטרות קידום ופרסום במדיה החברתית שלנו, אך
        לעולם לא נפרסם תמונה ללא הסכמתכם המלאה.
      </p>
      <h2 className={styles.policyHeading}>תמיכה לאחר הצילום</h2>
      <p className={styles.policyText}>
        לאחר הצילום, ניתן יהיה לבחור מתוך גלריה של התמונות ולבחור את התמונות
        הסופיות לעריכה. זמני העריכה והתמונות הסופיות יינתנו בהתאם לסיכום עם
        הלקוח.
      </p>
      <p className={styles.policyText}>
        <strong>עריכה ובחירת תמונות:</strong> ניתן לבקש שינויים נוספים בעריכה
        הראשונית. בקשות נוספות מעבר למוסכם עשויות לגרור עלויות נוספות.
      </p>
      <p className={styles.policyText}>
        <strong>אספקת הקבצים:</strong> התמונות הסופיות יימסרו בפורמט דיגיטלי או
        מודפס, בהתאם לבחירתכם. אנו מחויבים לשמור עותק גיבוי לתקופה של עד שנה.
      </p>
      <h2 className={styles.policyHeading}>יצירת קשר</h2>
      <p className={styles.policyText}>
        אם יש לכם שאלות נוספות בנוגע למדיניות שלנו או שאתם זקוקים לתמיכה, נשמח
        לעמוד לרשותכם! ניתן ליצור קשר דרך עמוד "נשמח לשמוע מכם" או בטלפון, במייל
        ובווטסאפ.
      </p>
      <p className={styles.policyText}>
        תודה שבחרתם בנו לצילום הרגעים החשובים שלכם!
      </p>
    </div>
  );
};

export default PolicySupport;
