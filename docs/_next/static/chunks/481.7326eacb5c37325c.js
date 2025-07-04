'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[481],
	{
		3481: (e, t, a) => {
			(a.r(t), a.d(t, { default: () => N }));
			var r = a(5640),
				l = a(4479);
			let s = (e) =>
					new Promise((t, a) => {
						let r = new FileReader();
						(r.readAsDataURL(e),
							(r.onload = () => {
								let { result: e } = r;
								e ? ('string' == typeof e ? t(e) : t(new TextDecoder('utf-8').decode(e))) : t('');
							}),
							(r.onerror = (e) => a(Error(e.type))));
					}),
				n = (e) =>
					new Promise((t, a) => {
						let r = new Image();
						((r.src = e),
							(r.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = 32), (e.height = 32));
								let a = e.getContext('2d');
								a &&
									(a.drawImage(r, 0, 0, 32, 32),
									e.toBlob(
										(a) => {
											a && (t(URL.createObjectURL(a)), e.remove());
										},
										'image/vnd.microsoft.icon',
										'-moz-parse-options:format=bmp;bpp=512',
									));
							}),
							(r.onerror = () => {
								a(Error('error'));
							}));
					}),
				o = (e) =>
					new Promise((t, a) => {
						let r = new Image();
						((r.src = e),
							(r.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = 32), (e.height = 32));
								let a = e.getContext('2d');
								a &&
									((a.fillStyle = '#ffffff'),
									a.fillRect(0, 0, e.width, e.height),
									a.drawImage(r, 0, 0, 32, 32),
									e.toBlob(
										(a) => {
											a && (t(URL.createObjectURL(a)), e.remove());
										},
										'image/jpeg',
										1,
									));
							}),
							(r.onerror = () => {
								a(Error('error'));
							}));
					}),
				i = (e) =>
					new Promise((t, a) => {
						let r = new Image();
						((r.src = e),
							(r.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = r.width || 512), (e.height = r.height || 512));
								let a = e.getContext('2d');
								a &&
									(a.drawImage(r, 0, 0),
									e.toBlob((a) => {
										a && (t(URL.createObjectURL(a)), e.remove());
									}, 'image/png'));
							}),
							(r.onerror = () => {
								a(Error('error'));
							}));
					}),
				c = (e) => {
					let t = /^data:(.*?);base64,/.exec(e);
					return (console.info('match', t), t ? t[1] : null);
				},
				d = async (e, t) => {
					await (0, l.Ay)();
					let a = document.createElement('canvas');
					((a.width = t.width), (a.height = t.height));
					let r = a.getContext('2d');
					if (null === r) return '';
					r.drawImage(t, 0, 0);
					let s = (0, l.td)(a, r);
					return (a.remove(), 'golden' === e ? (0, l.MH)(s) : 'grayscale' === e && (0, l.CM)(s), s.get_base64());
				},
				m = (e, t) =>
					new Promise((a, r) => {
						let l = new Image();
						((l.src = t),
							(l.onload = async () => {
								a(await d(e, l));
							}),
							(l.onerror = () => {
								r(Error('Error'));
							}));
					});
			var x = a(148);
			let u = () =>
					(0, r.jsx)('section', {
						className: 'py-16',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto max-w-6xl px-6 text-center',
							children: [
								(0, r.jsx)('h3', {
									className: 'text-3xl font-semibold sm:text-4xl',
									children: 'Why Use Our Image Editor?',
								}),
								(0, r.jsx)('p', {
									className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
									children:
										'A fast, private, and intuitive image editor right in your browser. No uploads. No fuss. Just editing.',
								}),
								(0, r.jsxs)('div', {
									className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
									children: [
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', {
													className: 'text-lg font-semibold',
													children: '\uD83D\uDEE1️ Privacy-First',
												}),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children: 'All image editing happens locally. Your photos never leave your device.',
												}),
											],
										}),
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Fast & Lightweight' }),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children:
														'Load and edit images instantly—no need to download heavy software or create an account.',
												}),
											],
										}),
										(0, r.jsxs)('div', {
											className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
											children: [
												(0, r.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83C\uDFA8 Smart Tools' }),
												(0, r.jsx)('p', {
													className: 'mt-2 text-sm text-neutral-500',
													children:
														'Crop, blur, annotate, or draw with precision using an intuitive and modern interface.',
												}),
											],
										}),
									],
								}),
							],
						}),
					}),
				h = 'images';
			var p = a(7864),
				g = a.n(p);
			let f = () =>
					(0, r.jsx)('header', {
						className: 'w-full',
						children: (0, r.jsxs)('div', {
							className: 'mx-auto flex max-w-7xl items-center justify-between px-6 py-4',
							children: [
								(0, r.jsx)('h1', { className: 'text-xl font-bold', children: h }),
								(0, r.jsx)('nav', {
									className: 'space-x-4 text-sm font-medium text-neutral-500',
									children: (0, r.jsx)(g(), {
										href: 'https://github.com/hieudoanm/images',
										target: '_blank',
										className: 'hover:text-black',
										children: 'GitHub',
									}),
								}),
							],
						}),
					}),
				b = () =>
					(0, r.jsx)('footer', {
						className: 'w-full border-t border-neutral-800 py-8',
						children: (0, r.jsxs)('div', {
							className:
								'mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-neutral-500 sm:flex-row',
							children: [
								(0, r.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', h, '. All rights reserved.'] }),
								(0, r.jsx)('div', {
									className: 'space-x-4',
									children: (0, r.jsx)(g(), {
										href: 'https://github.com/hieudoanm/redact',
										target: '_blank',
										rel: 'noopener noreferrer',
										className: 'hover:underline',
										children: 'GitHub',
									}),
								}),
							],
						}),
					}),
				w = (e) => {
					let { content: t, format: a, filename: r } = e,
						l = encodeURI(t),
						s = document.createElement('a');
					s.setAttribute('href', l);
					let n = new Date(),
						o = n.getTimezoneOffset(),
						[i, c] = new Date(n.getTime() + -((o / 60) * 36e5)).toISOString().split('T'),
						[d] = c.split(':').join('-').split('.'),
						m = ''.concat(r, '-').concat(i, '-').concat(d, '.').concat(a);
					(s.setAttribute('download', m), document.body.append(s), s.click(), s.remove());
				},
				j = (e) => {
					let { content: t, format: a, filename: r } = e;
					w({ content: 'data:text/'.concat(a, ';charset=utf-8,').concat(t), format: a, filename: r });
				},
				v = (e) => {
					let { content: t, format: a, filename: r } = e;
					w({ content: t, format: a, filename: r });
				},
				y = (e) => {
					let { content: t, format: a, filename: r } = e;
					return {
						image: () => v({ content: t, format: a, filename: r }),
						text: () => j({ content: t, format: a, filename: r }),
					};
				},
				N = () => {
					var e, t, a;
					let [{ originalBase64: l = '', filteredBase64: d = '', file: h = null }, p] = (0, x.useState)({
							originalBase64: '',
							filteredBase64: '',
							file: null,
						}),
						g = async (e) => {
							var t;
							let a = null == (t = e.target.files) ? void 0 : t[0];
							if (a) {
								let e = await s(a);
								p((t) => ({ ...t, originalBase64: e, filteredBase64: '', file: a }));
							}
						};
					return (0, r.jsxs)(r.Fragment, {
						children: [
							(0, r.jsx)(f, {}),
							(0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
							(0, r.jsx)('section', {
								className: 'w-full py-20',
								children: (0, r.jsxs)('div', {
									className: 'mx-auto flex max-w-3xl flex-col gap-y-8 px-4 text-center sm:px-6',
									children: [
										(0, r.jsx)('h2', {
											className: 'text-4xl font-extrabold sm:text-5xl',
											children: 'Edit Images with Ease',
										}),
										(0, r.jsx)('p', {
											className: 'text-lg text-neutral-500',
											children:
												'Upload and edit your images directly in the browser—crop, draw, blur, and more with full privacy.',
										}),
										(0, r.jsxs)('div', {
											className: 'flex justify-center gap-4',
											children: [
												(0, r.jsxs)('label', {
													className: 'inline-block cursor-pointer rounded-full border border-neutral-800 px-6 py-3',
													children: [
														(0, r.jsx)('span', { children: 'Upload Image' }),
														(0, r.jsx)('input', { type: 'file', accept: 'image/*', onChange: g, className: 'hidden' }),
													],
												}),
												(null == (e = c(d || l)) ? void 0 : e.includes('png')) &&
													(0, r.jsx)('button', {
														onClick: async () => {
															y({ content: await n(d || l), format: 'ico', filename: 'favicon' }).image();
														},
														className:
															'cursor-pointer rounded-full border border-neutral-800 px-6 py-3 transition hover:bg-neutral-900',
														children: 'Export as ICO',
													}),
												(null == (t = c(d || l)) ? void 0 : t.includes('png')) &&
													(0, r.jsx)('button', {
														onClick: async () => {
															y({ content: await o(d || l), format: 'jpg', filename: 'image' }).image();
														},
														className:
															'cursor-pointer rounded-full border border-neutral-800 px-6 py-3 transition hover:bg-neutral-900',
														children: 'Export as JPG',
													}),
												(null == (a = c(d || l)) ? void 0 : a.includes('svg')) &&
													(0, r.jsx)('button', {
														onClick: async () => {
															y({ content: await i(d || l), format: 'png', filename: 'image' }).image();
														},
														className:
															'cursor-pointer rounded-full border border-neutral-800 px-6 py-3 transition hover:bg-neutral-900',
														children: 'Export as PNG',
													}),
											],
										}),
									],
								}),
							}),
							(0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
							!h &&
								(0, r.jsxs)(r.Fragment, {
									children: [
										(0, r.jsx)(u, {}),
										(0, r.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
										(0, r.jsx)('section', {
											className: 'w-full py-16',
											children: (0, r.jsxs)('div', {
												className: 'mx-auto max-w-3xl px-6 text-center',
												children: [
													(0, r.jsx)('h3', {
														className: 'text-2xl font-bold sm:text-3xl',
														children: 'Ready to edit your image?',
													}),
													(0, r.jsx)('p', {
														className: 'mt-4 text-neutral-500',
														children:
															'Upload your image and start editing instantly — no sign-up, no server, 100% local and private.',
													}),
													(0, r.jsxs)('label', {
														className:
															'mt-6 inline-block cursor-pointer rounded-full border border-neutral-800 px-6 py-3 text-white',
														children: [
															(0, r.jsx)('span', { children: 'Upload Image' }),
															(0, r.jsx)('input', {
																type: 'file',
																accept: 'image/*',
																onChange: g,
																className: 'hidden',
															}),
														],
													}),
												],
											}),
										}),
									],
								}),
							h &&
								(0, r.jsxs)('div', {
									className: 'container mx-auto flex flex-col gap-y-8 p-8',
									children: [
										(0, r.jsx)('div', {
											className: 'flex flex-col gap-y-8',
											children: (0, r.jsxs)('div', {
												className: 'grid grid-cols-2 gap-8',
												children: [
													(0, r.jsx)('button', {
														type: 'button',
														onClick: async () => {
															let e = await m('golden', l);
															p((t) => ({ ...t, filteredBase64: e }));
														},
														className: 'w-full cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
														children: 'Filter - Golden',
													}),
													(0, r.jsx)('button', {
														type: 'button',
														onClick: async () => {
															let e = await m('grayscale', l);
															p((t) => ({ ...t, filteredBase64: e }));
														},
														className: 'w-full cursor-pointer rounded-full border border-neutral-800 px-4 py-2',
														children: 'Filter - Grayscale',
													}),
												],
											}),
										}),
										(0, r.jsx)('div', {
											className: 'h-64 bg-contain bg-center bg-no-repeat md:h-128',
											style: { backgroundImage: 'url('.concat(d || l, ')') },
										}),
									],
								}),
							(0, r.jsx)(b, {}),
						],
					});
				};
		},
	},
]);
