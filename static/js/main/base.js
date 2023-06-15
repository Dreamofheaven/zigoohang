
// 올라가기 버튼
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// 테마
function getStoredTheme() {
  return localStorage.getItem("theme");
}

function setStoredTheme(theme) {
  localStorage.setItem("theme", theme);
}

function getPreferredTheme() {
  const storedTheme = getStoredTheme();
  if (storedTheme) {
    return storedTheme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
}

function toggleTheme() {
  const currentTheme = getPreferredTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setStoredTheme(newTheme);
  setTheme(newTheme);
}

const lightThemeBtn = document.getElementById("lightThemeBtn");
const darkThemeBtn = document.getElementById("darkThemeBtn");

lightThemeBtn.addEventListener("click", () => {
  stylesheet.href = '/static/css/main/theme-light.css'
  setStoredTheme("light");
});

darkThemeBtn.addEventListener("click", () => {
  stylesheet.href = '/static/css/main/theme-dark.css'
  setStoredTheme("dark");
});
function applyOSTheme() {
  stylesheet.href = '/static/css/main/theme-os.css'
  localStorage.removeItem("theme"); // 기존 사용자 지정 테마 정보 삭제
}

const userPrefThemeBtn = document.getElementById("userPrefThemeBtn");

userPrefThemeBtn.addEventListener("click", () => {
  applyOSTheme();
});

// 초기 테마 설정 및 적용 (수정)
if (getStoredTheme() === null) {
  applyOSTheme();
} else {
  setTheme(getPreferredTheme());
}
// 초기 테마 설정 및 적용
// setTheme(getPreferredTheme());


// login required
function loginRequired() {
  let result = confirm("로그인이 필요합니다. 로그인 하시겠습니까?")

  if (result) {
    window.location.href = '/accounts/login/';
  }
}