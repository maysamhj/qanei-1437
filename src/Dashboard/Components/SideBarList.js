import {
  dashboardIcon, userIcon, saleInfo,
  financialInfo, wallet, support, aboutUs,
  contactUs, exitAccount
} from "../../SVGIcons";
export let list = <ul>
  <li><a href="/dashboard">{dashboardIcon}داشبورد</a></li>

  <li><a href="/dashboard/profile">{userIcon}اطلاعات کاربری</a></li>

  <li><a href="/dashboard/orders"> {saleInfo} سوابق فروش</a></li>

  <li><a href="/dashboard/money">{financialInfo}سوابق مالی</a></li>

  <li><a href="/dashboard/wallet">{wallet}کیف پول</a></li>

  <li><a href="/dashboard/support">{support} پشتیبانی </a></li>

  <li><a href="/aboutUs">{aboutUs}درباره ما</a></li>

  <li><a href="/contact"> {contactUs}تماس با ما</a></li>

  <li><a href="/logout"> {exitAccount}خروج از حساب</a></li>
</ul>