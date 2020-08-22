import React, { Fragment } from "react";

// Create a class with the size and start and end coordinates for the icons.
class Icon {
  constructor(viewBox, svg) {
    this.viewBox = viewBox;
    this.svg = <Fragment>{svg}</Fragment>;
  }
}

// Object with all the icons alphabetically ordered.
const svgs = {
  arrow: new Icon(
    "0 0 32 32",
    (
      <path d="M16 8.05156L3.55556 3.71556V22.1547L16 27.9342V8.05156ZM4.67911 0.192L16 4.13511L27.3209 0.192C29.1822 -0.456889 31.1964 0.595555 31.8187 2.54222C31.9378 2.92089 32 3.31733 32 3.71556V22.1547C32 23.6231 31.1733 24.9529 29.888 25.5502L16 32L2.112 25.5502C0.826667 24.9529 0 23.6231 0 22.1547V3.71556C0 1.664 1.59111 0 3.55556 0C3.93778 0 4.31822 0.0657778 4.67911 0.192Z" />
    )
  ),
  book: new Icon(
    "0 0 32 36",
    (
      <path d="M28.4444 0H5.33333C3.18933 0 0 1.42044 0 5.33333V30.2222C0 34.1351 3.18933 35.5556 5.33333 35.5556H32V32H5.35467C4.53333 31.9787 3.55556 31.6551 3.55556 30.2222C3.55556 30.0427 3.57156 29.8827 3.59822 29.7369C3.79733 28.7129 4.63644 28.4622 5.35467 28.4444H32V3.55556C32 2.61256 31.6254 1.70819 30.9586 1.0414C30.2918 0.374602 29.3874 0 28.4444 0ZM28.4444 16L24.8889 14.2222L21.3333 16V3.55556H28.4444V16Z" />
    )
  ),
  building: new Icon(
    "0 0 32 36",
    (
      <path d="M15.316,0l-12.977,0c-0.62,0 -1.215,0.246 -1.654,0.685c-0.439,0.439 -0.685,1.034 -0.685,1.654l0,30.764l5.517,0l0,-3.31l6.621,0l0,3.31l5.517,0l0,-30.764c0,-0.62 -0.246,-1.215 -0.685,-1.654c-0.439,-0.439 -1.034,-0.685 -1.654,-0.685Zm14.477,5.517l-9.931,0l0,27.586l12.138,0l0,-25.379c0,-0.585 -0.233,-1.147 -0.647,-1.561c-0.414,-0.413 -0.975,-0.646 -1.56,-0.646Zm-24.276,18.759l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm9.931,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.413,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm-23.172,-5.517l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm9.931,-0.001l-2.207,0l0,-2.206l2.207,0l0,2.206Zm4.413,0l-2.207,0l0,-2.206l2.207,0l0,2.206Zm-23.172,-5.517l-2.207,0l0,-2.207l2.207,0.001l0,2.206Zm4.414,0l-2.207,0l0,-2.206l2.207,0l0,2.206Zm4.414,0l-2.207,0l0,-2.206l2.207,0l0,2.206Zm9.931,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.413,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm-23.172,-5.517l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Zm4.414,0l-2.207,0l0,-2.207l2.207,0l0,2.207Z" />
    )
  ),
  calendar: new Icon(
    "0 0 32 30",
    (
      <path d="M30.25,4l-4,0l0,3c0,0.289 -0.057,0.575 -0.168,0.842c-0.11,0.267 -0.272,0.509 -0.477,0.714c-0.204,0.204 -0.446,0.366 -0.713,0.477c-0.267,0.11 -0.553,0.167 -0.842,0.167c-0.289,0 -0.575,-0.057 -0.842,-0.167c-0.267,-0.111 -0.51,-0.273 -0.714,-0.477c-0.204,-0.205 -0.366,-0.447 -0.477,-0.714c-0.11,-0.267 -0.167,-0.553 -0.167,-0.842l0,-3l-11.65,0l0,3c0,0.584 -0.232,1.143 -0.644,1.556c-0.413,0.412 -0.972,0.644 -1.556,0.644c-0.583,0 -1.143,-0.232 -1.555,-0.644c-0.413,-0.413 -0.645,-0.972 -0.645,-1.556l0,-3l-4,0c-0.238,-0.003 -0.474,0.042 -0.694,0.133c-0.22,0.09 -0.42,0.223 -0.588,0.392c-0.168,0.169 -0.3,0.369 -0.389,0.59c-0.089,0.221 -0.133,0.457 -0.129,0.695l0,22.38c-0.004,0.234 0.038,0.466 0.124,0.683c0.086,0.218 0.214,0.416 0.376,0.584c0.163,0.168 0.357,0.303 0.571,0.396c0.215,0.093 0.445,0.143 0.679,0.147l28.5,0c0.233,-0.004 0.464,-0.054 0.679,-0.147c0.214,-0.093 0.408,-0.228 0.571,-0.396c0.162,-0.168 0.29,-0.366 0.376,-0.584c0.086,-0.217 0.128,-0.449 0.124,-0.683l0,-22.38c0.004,-0.234 -0.038,-0.466 -0.124,-0.683c-0.086,-0.218 -0.214,-0.416 -0.376,-0.584c-0.163,-0.168 -0.357,-0.303 -0.571,-0.396c-0.215,-0.093 -0.445,-0.143 -0.679,-0.147Zm-22.25,20l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm-18,-5l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm-18,-5l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm6,0l-2,0l0,-2l2,0l0,2Zm-18,-6c0.266,0 0.52,-0.105 0.708,-0.293c0.187,-0.188 0.292,-0.442 0.292,-0.707l0,-6c0,-0.265 -0.105,-0.52 -0.292,-0.707c-0.188,-0.188 -0.442,-0.293 -0.708,-0.293c-0.265,0 -0.519,0.105 -0.707,0.293c-0.187,0.187 -0.293,0.442 -0.293,0.707l0,6c0,0.265 0.106,0.519 0.293,0.707c0.188,0.188 0.442,0.293 0.707,0.293Zm16,0c0.265,0 0.52,-0.105 0.707,-0.293c0.188,-0.188 0.293,-0.442 0.293,-0.707l0,-6c0,-0.265 -0.105,-0.52 -0.293,-0.707c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293c-0.265,0 -0.52,0.105 -0.707,0.293c-0.188,0.187 -0.293,0.442 -0.293,0.707l0,6c0,0.265 0.105,0.519 0.293,0.707c0.187,0.188 0.442,0.293 0.707,0.293Z" />
    )
  ),
  calendarClock: new Icon(
    "0 0 32 36",
    (
      <path d="M19.2 19.2H21.6V23.712L25.504 25.968L24.304 28.048L19.2 25.104V19.2ZM25.6 11.2H3.2V28.8H10.672C9.984 27.344 9.6 25.712 9.6 24C9.6 21.0296 10.78 18.1808 12.8804 16.0804C14.9808 13.98 17.8296 12.8 20.8 12.8C22.512 12.8 24.144 13.184 25.6 13.872V11.2ZM3.2 32C2.35131 32 1.53737 31.6629 0.937258 31.0627C0.337142 30.4626 0 29.6487 0 28.8V6.4C0 4.624 1.424 3.2 3.2 3.2H4.8V0H8V3.2H20.8V0H24V3.2H25.6C26.4487 3.2 27.2626 3.53714 27.8627 4.13726C28.4629 4.73737 28.8 5.55131 28.8 6.4V16.16C30.784 18.176 32 20.944 32 24C32 26.9704 30.82 29.8192 28.7196 31.9196C26.6192 34.02 23.7704 35.2 20.8 35.2C17.744 35.2 14.976 33.984 12.96 32H3.2ZM20.8 16.24C18.7419 16.24 16.7681 17.0576 15.3129 18.5129C13.8576 19.9681 13.04 21.9419 13.04 24C13.04 28.288 16.512 31.76 20.8 31.76C21.8191 31.76 22.8281 31.5593 23.7696 31.1693C24.7111 30.7793 25.5666 30.2077 26.2871 29.4871C27.0077 28.7666 27.5793 27.9111 27.9693 26.9696C28.3593 26.0281 28.56 25.0191 28.56 24C28.56 19.712 25.088 16.24 20.8 16.24Z" />
    )
  ),
  calendarNew: new Icon(
    "0 0 32 31",
    (
      <path d="M27.152,12.121c-1.929,0 -3.779,-0.766 -5.143,-2.13c-1.364,-1.364 -2.13,-3.214 -2.13,-5.143l-9.988,0l0,2.91c0,0.565 -0.225,1.108 -0.625,1.508c-0.4,0.4 -0.942,0.625 -1.508,0.625c-0.566,0 -1.109,-0.225 -1.509,-0.625c-0.4,-0.4 -0.625,-0.943 -0.625,-1.508l0,-2.91l-3.878,0c-0.231,-0.002 -0.46,0.042 -0.674,0.129c-0.213,0.087 -0.407,0.217 -0.57,0.38c-0.163,0.164 -0.291,0.359 -0.377,0.573c-0.086,0.214 -0.129,0.443 -0.125,0.674l0,21.701c-0.004,0.227 0.037,0.452 0.12,0.663c0.084,0.211 0.208,0.403 0.365,0.566c0.158,0.163 0.346,0.294 0.554,0.384c0.208,0.09 0.432,0.139 0.658,0.142l27.636,0c0.227,-0.003 0.451,-0.052 0.659,-0.142c0.208,-0.09 0.396,-0.221 0.553,-0.384c0.158,-0.163 0.282,-0.355 0.365,-0.566c0.083,-0.211 0.124,-0.436 0.12,-0.663l0,-17.309c-1.159,0.736 -2.505,1.127 -3.878,1.125Zm-19.394,12.121l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm-17.454,-4.848l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm-17.454,-4.849l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.94,0l0,-1.939l1.94,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm5.818,0l-1.939,0l0,-1.939l1.939,0l0,1.939Zm1.94,-4.848c2.677,0 4.848,-2.171 4.848,-4.849c0,-2.677 -2.171,-4.848 -4.848,-4.848c-2.678,0 -4.849,2.171 -4.849,4.848c0,2.678 2.171,4.849 4.849,4.849Zm-19.394,-0.97c0.257,0 0.504,-0.102 0.685,-0.284c0.182,-0.182 0.284,-0.428 0.284,-0.685l0,-5.819c0,-0.257 -0.102,-0.503 -0.284,-0.685c-0.181,-0.182 -0.428,-0.284 -0.685,-0.284c-0.257,0 -0.504,0.102 -0.686,0.284c-0.182,0.182 -0.284,0.428 -0.284,0.685l0,5.819c0,0.257 0.102,0.503 0.284,0.685c0.182,0.182 0.429,0.284 0.686,0.284Z" />
    )
  ),
  close: new Icon(
    "0 0 32 32",
    (
      <path d="M26.6667 0H5.33333C3.91885 0 2.56229 0.561903 1.5621 1.5621C0.561903 2.56229 0 3.91885 0 5.33333V26.6667C0 28.0812 0.561903 29.4377 1.5621 30.4379C2.56229 31.4381 3.91885 32 5.33333 32H26.6667C28.0812 32 29.4377 31.4381 30.4379 30.4379C31.4381 29.4377 32 28.0812 32 26.6667V5.33333C32 3.91885 31.4381 2.56229 30.4379 1.5621C29.4377 0.561903 28.0812 0 26.6667 0ZM20.8178 18.2933C20.9844 18.4586 21.1167 18.6552 21.2069 18.8719C21.2972 19.0885 21.3436 19.3209 21.3436 19.5556C21.3436 19.7902 21.2972 20.0226 21.2069 20.2392C21.1167 20.4559 20.9844 20.6525 20.8178 20.8178C20.6525 20.9844 20.4559 21.1167 20.2392 21.2069C20.0226 21.2972 19.7902 21.3436 19.5556 21.3436C19.3209 21.3436 19.0885 21.2972 18.8719 21.2069C18.6552 21.1167 18.4586 20.9844 18.2933 20.8178L16 18.5067L13.7067 20.8178C13.5414 20.9844 13.3448 21.1167 13.1281 21.2069C12.9115 21.2972 12.6791 21.3436 12.4444 21.3436C12.2098 21.3436 11.9774 21.2972 11.7608 21.2069C11.5441 21.1167 11.3475 20.9844 11.1822 20.8178C11.0156 20.6525 10.8833 20.4559 10.7931 20.2392C10.7028 20.0226 10.6564 19.7902 10.6564 19.5556C10.6564 19.3209 10.7028 19.0885 10.7931 18.8719C10.8833 18.6552 11.0156 18.4586 11.1822 18.2933L13.4933 16L11.1822 13.7067C10.8475 13.3719 10.6594 12.9179 10.6594 12.4444C10.6594 11.971 10.8475 11.517 11.1822 11.1822C11.517 10.8475 11.971 10.6594 12.4444 10.6594C12.9179 10.6594 13.3719 10.8475 13.7067 11.1822L16 13.4933L18.2933 11.1822C18.6281 10.8475 19.0821 10.6594 19.5556 10.6594C20.029 10.6594 20.483 10.8475 20.8178 11.1822C21.1525 11.517 21.3406 11.971 21.3406 12.4444C21.3406 12.9179 21.1525 13.3719 20.8178 13.7067L18.5067 16L20.8178 18.2933Z" />
    )
  ),
  collaborators: new Icon(
    "0 0 32 32",
    (
      <path d="M18.529 20.9749C17.7465 20.429 16.9104 19.9842 16.0358 19.6443C17.1992 18.587 17.9709 17.1058 18.1052 15.4476C19.8694 13.7286 22.1819 12.7862 24.6609 12.7862C26.5962 12.7862 28.4543 13.3689 30.0349 14.4712C30.6013 14.8663 31.3801 14.7276 31.7751 14.1612C32.1699 13.595 32.0313 12.816 31.4651 12.4212C30.6826 11.8753 29.8462 11.4307 28.9717 11.0906C30.2554 9.92386 31.0625 8.24148 31.0625 6.37429C31.0625 2.85938 28.2031 0 24.6882 0C21.1736 0 18.3142 2.85938 18.3142 6.37429C18.3142 8.23391 19.1147 9.91018 20.3896 11.0764C20.2151 11.1436 20.0415 11.2146 19.8696 11.2903C19.0874 11.6346 18.352 12.0579 17.6682 12.555C16.7251 10.2119 14.4289 8.55374 11.7524 8.55374C8.23773 8.55374 5.3781 11.4131 5.3781 14.9278C5.3781 16.7823 6.17425 18.4539 7.44232 19.6197C4.05193 20.89 1.3029 23.6182 0.183752 27.0977C-0.187343 28.2515 0.00919106 29.4752 0.72306 30.4549C1.43693 31.4344 2.54142 31.9962 3.75334 31.9962H14.6272C15.3173 31.9962 15.8769 31.4366 15.8769 30.7462C15.8769 30.056 15.3173 29.4964 14.6272 29.4964H3.75334C3.34929 29.4964 2.98112 29.3092 2.74309 28.9825C2.50505 28.6558 2.43962 28.2479 2.56315 27.8631C3.79851 24.0223 7.5661 21.3399 11.725 21.3399C13.6601 21.3399 15.5185 21.9227 17.0991 23.025C17.6652 23.42 18.4443 23.2811 18.8393 22.7149C19.2341 22.1487 19.0954 21.3697 18.529 20.9749V20.9749ZM24.6882 2.49976C26.8247 2.49976 28.5627 4.23781 28.5627 6.37429C28.5627 8.51052 26.8247 10.2488 24.6882 10.2488C22.552 10.2488 20.8137 8.51052 20.8137 6.37429C20.8137 4.23781 22.552 2.49976 24.6882 2.49976ZM11.7524 11.0533C13.8889 11.0533 15.6269 12.7915 15.6269 14.9278C15.6269 17.0643 13.8889 18.8023 11.7524 18.8023C9.61591 18.8023 7.87786 17.0643 7.87786 14.9278C7.87786 12.7915 9.61591 11.0533 11.7524 11.0533V11.0533ZM32 26.0594C32 26.7496 31.4404 27.3092 30.75 27.3092H27.313V30.7462C27.313 31.4366 26.7534 31.9962 26.0632 31.9962C25.3728 31.9962 24.8132 31.4366 24.8132 30.7462V27.3092H21.3762C20.686 27.3092 20.1264 26.7496 20.1264 26.0594C20.1264 25.369 20.686 24.8094 21.3762 24.8094H24.8132V21.3724C24.8132 20.6822 25.3728 20.1226 26.0632 20.1226C26.7534 20.1226 27.313 20.6822 27.313 21.3724V24.8094H30.75C31.4404 24.8094 32 25.369 32 26.0594V26.0594Z" />
    )
  ),
  envelope: new Icon(
    "0 0 32 25",
    (
      <path d="M30.857,0l-29.714,0c-0.303,0 -0.594,0.12 -0.808,0.333c-0.215,0.213 -0.335,0.502 -0.335,0.803l0,22.728c0,0.301 0.12,0.59 0.335,0.803c0.214,0.213 0.505,0.333 0.808,0.333l29.714,0c0.303,0 0.594,-0.12 0.808,-0.333c0.215,-0.213 0.335,-0.502 0.335,-0.803l0,-22.728c0,-0.301 -0.12,-0.59 -0.335,-0.803c-0.214,-0.213 -0.505,-0.333 -0.808,-0.333Zm-14.156,14.533c-0.2,0.155 -0.447,0.24 -0.701,0.24c-0.254,0 -0.501,-0.085 -0.701,-0.24l-11.188,-8.652l1.403,-1.794l10.486,8.11l10.486,-8.11l1.403,1.794l-11.188,8.652Z" />
    )
  ),
  facebook: new Icon(
    "0 0 96.124 96.123",
    (
      <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" />
    )
  ),
  github: new Icon(
    "0 0 32 32",
    (
      <path d="M16 0C7.16262 0 0 7.2027 0 16.0895C0 23.1971 4.58312 29.2286 10.942 31.358C11.7425 31.5031 12.0313 31.0079 12.0313 30.582C12.0313 30.1997 12.0184 29.1867 12.0136 27.8461C7.56206 28.8173 6.62202 25.6877 6.62202 25.6877C5.89693 23.8294 4.8462 23.3342 4.8462 23.3342C3.39443 22.3356 4.95689 22.3582 4.95689 22.3582C6.56427 22.4711 7.40646 24.0165 7.40646 24.0165C8.83417 26.475 11.1538 25.7652 12.0618 25.3538C12.2077 24.3133 12.6248 23.6036 13.0804 23.2019C9.52877 22.797 5.79427 21.4161 5.79427 15.2491C5.79427 13.4956 6.41829 12.0567 7.43694 10.9339C7.27492 10.5258 6.72148 8.88844 7.59575 6.6752C7.59575 6.6752 8.93844 6.24126 11.9944 8.32222C13.2995 7.96519 14.6458 7.78294 15.9984 7.78021C17.351 7.78241 18.6974 7.96467 20.0024 8.32222C23.06 6.23965 24.401 6.6752 24.401 6.6752C25.2753 8.88844 24.7267 10.5258 24.5599 10.9339C25.5865 12.0567 26.2025 13.494 26.2025 15.2491C26.2025 21.4323 22.4648 22.7905 18.9003 23.189C19.4698 23.6858 19.9832 24.6666 19.9832 26.1669C19.9832 28.3188 19.9639 30.0545 19.9639 30.582C19.9639 31.0127 20.2494 31.5128 21.066 31.3547C27.4217 29.2222 32 23.1954 32 16.0895C32 7.2027 24.8374 0 16 0Z" />
    )
  ),
  info: new Icon(
    "0 0 32 32",
    (
      <path d="M0 4C0 2.93913 0.421427 1.92172 1.17157 1.17157C1.92172 0.421427 2.93913 0 4 0L28 0C29.0609 0 30.0783 0.421427 30.8284 1.17157C31.5786 1.92172 32 2.93913 32 4V28C32 29.0609 31.5786 30.0783 30.8284 30.8284C30.0783 31.5786 29.0609 32 28 32H4C2.93913 32 1.92172 31.5786 1.17157 30.8284C0.421427 30.0783 0 29.0609 0 28V4ZM17.86 13.176L13.28 13.75L13.116 14.51L14.016 14.676C14.604 14.816 14.72 15.028 14.592 15.614L13.116 22.55C12.728 24.344 13.326 25.188 14.732 25.188C15.822 25.188 17.088 24.684 17.662 23.992L17.838 23.16C17.438 23.512 16.854 23.652 16.466 23.652C15.916 23.652 15.716 23.266 15.858 22.586L17.86 13.176ZM16 11C16.5304 11 17.0391 10.7893 17.4142 10.4142C17.7893 10.0391 18 9.53043 18 9C18 8.46957 17.7893 7.96086 17.4142 7.58579C17.0391 7.21071 16.5304 7 16 7C15.4696 7 14.9609 7.21071 14.5858 7.58579C14.2107 7.96086 14 8.46957 14 9C14 9.53043 14.2107 10.0391 14.5858 10.4142C14.9609 10.7893 15.4696 11 16 11Z" />
    )
  ),
  microphone: new Icon(
    "0 0 32 33",
    (
      <path d="M22.5561 0C17.7289 0 13.7449 3.66289 13.1958 8.34841L2.31915 23.7352L1.68641 24.6621L2.44597 25.4635L3.54146 26.5603L0 30.0586L1.9414 32.0013L5.39787 28.5017L7.25157 30.3554L8.22159 29.6808L23.6948 18.8028C28.3627 18.2402 32 14.2603 32 9.44391C32 4.24301 27.757 0 22.5561 0ZM22.5561 2.69826C26.2972 2.69826 29.3017 5.70277 29.3017 9.44391C29.3062 10.7612 28.9249 12.0509 28.2049 13.154L18.846 3.79375C19.9492 3.0742 21.239 2.69338 22.5561 2.69826V2.69826ZM16.9059 5.7338L26.2662 15.0941C25.163 15.8136 23.8732 16.1944 22.5561 16.1896C18.815 16.1896 15.8104 13.185 15.8104 9.44391C15.806 8.12664 16.1873 6.83688 16.9073 5.7338H16.9059ZM13.6181 12.3958C14.0834 13.7827 14.8615 15.0439 15.8923 16.0819C16.923 17.12 18.1788 17.9069 19.5624 18.3819L7.58885 26.8558L5.18605 24.3693L13.6181 12.3958Z" />
    )
  ),
  notion: new Icon(
    "0 0 32 34",
    (
      <path d="M5.5182 5.89367C6.55512 6.74248 6.94431 6.67805 8.89306 6.54639L27.2616 5.43565C27.6508 5.43565 27.3269 5.04347 27.1976 4.97904L24.1453 2.75617C23.5615 2.29955 22.7817 1.7757 21.2889 1.90596L3.50413 3.21419C2.8564 3.27862 2.72574 3.60638 2.98428 3.8669L5.5182 5.89367ZM6.62045 10.2077V29.6827C6.62045 30.729 7.13891 31.1211 8.30788 31.0553L28.4945 29.8788C29.6635 29.8143 29.7941 29.0944 29.7941 28.2442V8.89951C29.7941 8.05071 29.4702 7.59269 28.7544 7.65712L7.65876 8.89951C6.88038 8.96534 6.62045 9.35753 6.62045 10.2063V10.2077ZM26.5485 11.2512C26.6778 11.8395 26.5485 12.4278 25.9647 12.495L24.9917 12.6911V27.0676C24.1466 27.5256 23.3683 27.7876 22.7191 27.7876C21.6794 27.7876 21.4195 27.4598 20.6411 26.4807L14.2792 16.4155V26.153L16.2919 26.6124C16.2919 26.6124 16.2919 27.789 14.6684 27.789L10.1899 28.0495C10.0606 27.789 10.1899 27.1348 10.6444 27.0046L11.812 26.6782V13.8019L10.1927 13.6702C10.062 13.0819 10.3873 12.2331 11.2949 12.1673L16.0987 11.8409L22.7205 22.0364V13.0161L21.0317 12.8214C20.9024 12.1014 21.4209 11.579 22.07 11.5146L26.5485 11.2512ZM2.01129 1.44935L20.5119 0.0766894C22.7831 -0.119404 23.3683 0.0108579 24.7958 1.05716L30.7018 5.23956C31.6747 5.9581 32 6.1542 32 6.93857V29.8788C32 31.3158 31.4815 32.1675 29.6648 32.2963L8.17861 33.6045C6.81644 33.6704 6.16593 33.4743 5.45148 32.5582L1.10225 26.8715C0.323864 25.8252 0 25.0422 0 24.1262V3.73524C0 2.56008 0.519851 1.57821 2.01129 1.44935V1.44935Z" />
    )
  ),
  organization: new Icon(
    "0 0 32 32",
    (
      <path d="M30.81,18.72l-6.87,0l0,-1c0,-0.265 -0.105,-0.52 -0.293,-0.707c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293c-0.265,0 -0.52,0.105 -0.707,0.293c-0.188,0.187 -0.293,0.442 -0.293,0.707l0,1l-1.94,0l0,-2.83c-1.316,-0.276 -2.656,-0.42 -4,-0.43c-3.156,-0.013 -6.268,0.749 -9.06,2.22c-0.125,0.064 -0.229,0.162 -0.301,0.282c-0.072,0.12 -0.11,0.258 -0.109,0.398l0,5.61l7.11,0l0,6.09c0,0.265 0.105,0.52 0.293,0.707c0.187,0.188 0.442,0.293 0.707,0.293l16.17,0c0.265,0 0.519,-0.105 0.707,-0.293c0.188,-0.187 0.293,-0.442 0.293,-0.707l0,-10.34c0,-0.265 -0.105,-0.52 -0.293,-0.707c-0.188,-0.188 -0.442,-0.293 -0.707,-0.293Zm-1,10.36l-14.17,0l0,-8.36l6.3,0l0,0.91c0,0.265 0.105,0.52 0.293,0.707c0.187,0.188 0.442,0.293 0.707,0.293c0.265,0 0.519,-0.105 0.707,-0.293c0.188,-0.188 0.293,-0.442 0.293,-0.707l0,-0.91l5.87,0l0,8.36Zm-10.35,-4.93l5.96,0l0,1.4l-5.96,0l0,-1.4Zm-14.93,-5.77c-0.002,-0.503 0.134,-0.998 0.393,-1.43c0.259,-0.432 0.632,-0.784 1.077,-1.02c1.799,-0.933 3.722,-1.606 5.71,-2c-1.121,-0.906 -1.917,-2.152 -2.27,-3.55l-0.66,0c-2.925,-0.009 -5.808,0.695 -8.4,2.05c-0.116,0.062 -0.212,0.155 -0.279,0.267c-0.067,0.113 -0.102,0.242 -0.101,0.373l0,6.39l4.53,0l0,-1.08Zm15.76,-4.47c1.988,0.393 3.91,1.067 5.71,2c0.253,0.139 0.483,0.318 0.68,0.53l5.32,0l0,-3.42c0.001,-0.131 -0.034,-0.26 -0.101,-0.373c-0.067,-0.113 -0.164,-0.205 -0.279,-0.267c-2.592,-1.356 -5.475,-2.059 -8.4,-2.05l-0.66,0c-0.347,1.409 -1.144,2.666 -2.27,3.58Zm-4.29,-0.47c2.629,0 4.76,-2.104 4.76,-4.7c0,-2.596 -2.131,-4.7 -4.76,-4.7c-2.629,0 -4.76,2.104 -4.76,4.7c0,2.596 2.131,4.7 4.76,4.7Zm-7.22,-4.23l0.48,0l0,-0.43c0.003,-1.25 0.356,-2.475 1.019,-3.535c0.662,-1.061 1.609,-1.915 2.731,-2.465c-0.332,-0.766 -0.866,-1.427 -1.544,-1.913c-0.678,-0.487 -1.475,-0.781 -2.306,-0.851c-0.832,-0.07 -1.667,0.087 -2.416,0.453c-0.75,0.367 -1.387,0.929 -1.842,1.629c-0.456,0.699 -0.714,1.508 -0.746,2.342c-0.033,0.834 0.161,1.661 0.561,2.393c0.4,0.733 0.991,1.343 1.709,1.767c0.719,0.424 1.54,0.645 2.374,0.64l-0.02,-0.03Zm13.98,-0.47l0,0.43l0.48,0c0.823,-0.008 1.629,-0.238 2.333,-0.666c0.703,-0.428 1.279,-1.037 1.665,-1.764c0.387,-0.727 0.57,-1.545 0.531,-2.367c-0.039,-0.823 -0.299,-1.62 -0.753,-2.307c-0.454,-0.687 -1.084,-1.239 -1.826,-1.598c-0.741,-0.359 -1.565,-0.511 -2.385,-0.441c-0.821,0.07 -1.607,0.36 -2.277,0.839c-0.669,0.479 -1.197,1.13 -1.528,1.884c1.123,0.548 2.07,1.4 2.735,2.459c0.664,1.058 1.019,2.281 1.025,3.531Z" />
    )
  ),
  pencil: new Icon(
    "0 0 32 32",
    (
      <path d="M1.72168 31.9673C1.86114 31.9673 2.0006 31.9501 2.13834 31.9157L9.02525 30.194C9.32828 30.1182 9.60548 29.9615 9.82586 29.7411L30.9911 8.57593C31.6419 7.92512 32 7.06081 32 6.14141C32 5.222 31.6419 4.35769 30.9911 3.70688L28.2604 0.97622C26.9588 -0.325407 24.693 -0.325407 23.3914 0.97622L2.22615 22.1414C2.00588 22.362 1.84941 22.638 1.77333 22.9403L0.0516065 29.8272C-0.0119896 30.0811 -0.0168742 30.3461 0.0373239 30.6022C0.0915219 30.8582 0.203376 31.0985 0.364385 31.3048C0.525394 31.5112 0.73132 31.6781 0.966512 31.7929C1.2017 31.9077 1.45997 31.9673 1.72168 31.9673V31.9673ZM25.8259 3.41074L28.5565 6.14141L25.8259 8.87207L23.0952 6.14141L25.8259 3.41074V3.41074ZM4.99813 24.2385L20.6607 8.57593L23.3914 11.3066L7.72707 26.9692L4.08734 27.8782L4.99813 24.2385V24.2385Z" />
    )
  ),
  plane: new Icon(
    "0 0 60 60",
    (
      <path d="M51.4421 12.7496L27.6306 36.5585C28.3367 37.5693 28.937 38.661 29.4191 39.818L35.3604 54.122L51.4421 12.7465V12.7496ZM23.4406 32.369L47.2552 8.55701L5.87516 24.6369L20.1807 30.5806C21.329 31.0568 22.4221 31.6564 23.4406 32.369V32.369ZM59.5793 7.9163L40.8319 56.1437C39.6498 59.1917 36.2375 60.7562 33.2141 59.6396C32.4776 59.3674 31.8053 58.946 31.2395 58.4016C30.6737 57.8573 30.2265 57.2018 29.9262 56.4765L23.985 42.1725C22.8289 39.385 20.6138 37.1701 17.826 36.0142L3.51734 30.0736C0.549843 28.8389 -0.80637 25.4083 0.493853 22.4038C0.812666 21.6697 1.27365 21.0059 1.85022 20.4507C2.4268 19.8956 3.10756 19.46 3.85328 19.1691L52.086 0.417508C53.134 -0.0047915 54.2831 -0.109591 55.3902 0.116153C56.4974 0.341897 57.5137 0.888215 58.3127 1.68712C59.1117 2.48602 59.6581 3.50222 59.8838 4.60925C60.1096 5.71628 60.0048 6.86526 59.5824 7.91319L59.5793 7.9163Z" />
    )
  ),
  plus: new Icon(
    "0 0 32 32",
    (
      <path d="M16,0c-8.823,0 -16,7.178 -16,16c0,8.823 7.178,16 16,16c8.823,0 16,-7.177 16,-16c0,-8.823 -7.177,-16 -16,-16Zm0,29.714c-7.562,0 -13.714,-6.152 -13.714,-13.714c0,-7.562 6.152,-13.714 13.714,-13.714c7.562,0 13.714,6.152 13.714,13.714c0,7.562 -6.152,13.714 -13.714,13.714Zm-1.143,-14.857l0,-5.333c0,-0.632 0.512,-1.143 1.143,-1.143c0.631,0 1.143,0.511 1.143,1.143l0,5.333l5.333,0c0.631,0 1.143,0.512 1.143,1.143c0,0.631 -0.512,1.143 -1.143,1.143l-5.333,0l0,5.333c0,0.631 -0.512,1.143 -1.143,1.143c-0.631,0 -1.143,-0.512 -1.143,-1.143l0,-5.333l-5.333,0c-0.632,0 -1.143,-0.512 -1.143,-1.143c0,-0.631 0.511,-1.143 1.143,-1.143l5.333,0Z" />
    )
  ),
  twitter: new Icon(
    "0 0 612 612",
    (
      <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
    )
  ),
  // Default value returns null for typo errors or non-existent icons.
  default: null,
};

export default svgs;
