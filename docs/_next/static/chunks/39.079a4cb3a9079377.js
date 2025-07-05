'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[39],
	{
		1133: (e, t, a) => {
			a.d(t, { RG: () => s });
			let l = (e) => {
					let { content: t, format: a, filename: l } = e,
						r = encodeURI(t),
						n = document.createElement('a');
					n.setAttribute('href', r);
					let s = new Date(),
						i = s.getTimezoneOffset(),
						[o, c] = new Date(s.getTime() + -((i / 60) * 36e5)).toISOString().split('T'),
						[d] = c.split(':').join('-').split('.'),
						m = ''.concat(l, '-').concat(o, '-').concat(d, '.').concat(a);
					(n.setAttribute('download', m), document.body.append(n), n.click(), n.remove());
				},
				r = (e) => {
					let { content: t, format: a, filename: r } = e;
					l({ content: 'data:text/'.concat(a, ';charset=utf-8,').concat(t), format: a, filename: r });
				},
				n = (e) => {
					let { content: t, format: a, filename: r } = e;
					l({ content: t, format: a, filename: r });
				},
				s = (e) => {
					let { content: t, format: a, filename: l } = e;
					return {
						image: () => n({ content: t, format: a, filename: l }),
						text: () => r({ content: t, format: a, filename: l }),
					};
				};
		},
		2635: (e, t, a) => {
			a.d(t, { C: () => l });
			let l = 'images';
		},
		3039: (e, t, a) => {
			(a.r(t), a.d(t, { default: () => w }));
			var l = a(5640),
				r = a(1133),
				n = a(4479);
			let s = (e) =>
					new Promise((t, a) => {
						let l = new FileReader();
						(l.readAsDataURL(e),
							(l.onload = () => {
								let { result: e } = l;
								e ? ('string' == typeof e ? t(e) : t(new TextDecoder('utf-8').decode(e))) : t('');
							}),
							(l.onerror = (e) => a(Error(e.type))));
					}),
				i = (e) =>
					new Promise((t, a) => {
						let l = new Image();
						((l.src = e),
							(l.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = 32), (e.height = 32));
								let a = e.getContext('2d');
								a &&
									(a.drawImage(l, 0, 0, 32, 32),
									e.toBlob(
										(a) => {
											a && (t(URL.createObjectURL(a)), e.remove());
										},
										'image/vnd.microsoft.icon',
										'-moz-parse-options:format=bmp;bpp=512',
									));
							}),
							(l.onerror = () => {
								a(Error('error'));
							}));
					}),
				o = (e) =>
					new Promise((t, a) => {
						let l = new Image();
						((l.src = e),
							(l.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = 32), (e.height = 32));
								let a = e.getContext('2d');
								a &&
									((a.fillStyle = '#ffffff'),
									a.fillRect(0, 0, e.width, e.height),
									a.drawImage(l, 0, 0, 32, 32),
									e.toBlob(
										(a) => {
											a && (t(URL.createObjectURL(a)), e.remove());
										},
										'image/jpeg',
										1,
									));
							}),
							(l.onerror = () => {
								a(Error('error'));
							}));
					}),
				c = (e) =>
					new Promise((t, a) => {
						let l = new Image();
						((l.src = e),
							(l.onload = async () => {
								let e = document.createElement('canvas');
								((e.width = l.width || 512), (e.height = l.height || 512));
								let a = e.getContext('2d');
								a &&
									(a.drawImage(l, 0, 0),
									e.toBlob((a) => {
										a && (t(URL.createObjectURL(a)), e.remove());
									}, 'image/png'));
							}),
							(l.onerror = () => {
								a(Error('error'));
							}));
					}),
				d = (e) => {
					let t = /^data:(.*?);base64,/.exec(e);
					return (console.info('match', t), t ? t[1] : null);
				},
				m = async (e, t) => {
					await (0, n.Ay)();
					let a = document.createElement('canvas');
					((a.width = t.width), (a.height = t.height));
					let l = a.getContext('2d');
					if (null === l) return '';
					l.drawImage(t, 0, 0);
					let r = (0, n.td)(a, l);
					return (a.remove(), 'golden' === e ? (0, n.MH)(r) : 'grayscale' === e && (0, n.CM)(r), r.get_base64());
				},
				x = (e, t) =>
					new Promise((a, l) => {
						let r = new Image();
						((r.src = t),
							(r.onload = async () => {
								a(await m(e, r));
							}),
							(r.onerror = () => {
								l(Error('Error'));
							}));
					});
			var u = a(148);
			let h = () =>
				(0, l.jsx)('section', {
					className: 'py-16',
					children: (0, l.jsxs)('div', {
						className: 'container mx-auto p-4 text-center md:p-8',
						children: [
							(0, l.jsx)('h3', {
								className: 'text-3xl font-semibold sm:text-4xl',
								children: 'Why Use Our Image Editor?',
							}),
							(0, l.jsx)('p', {
								className: 'mx-auto mt-4 max-w-2xl text-neutral-500',
								children:
									'A fast, private, and intuitive image editor right in your browser. No uploads. No fuss. Just editing.',
							}),
							(0, l.jsxs)('div', {
								className: 'mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3',
								children: [
									(0, l.jsxs)('div', {
										className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
										children: [
											(0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83D\uDEE1️ Privacy-First' }),
											(0, l.jsx)('p', {
												className: 'mt-2 text-sm text-neutral-500',
												children: 'All image editing happens locally. Your photos never leave your device.',
											}),
										],
									}),
									(0, l.jsxs)('div', {
										className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
										children: [
											(0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '⚡ Fast & Lightweight' }),
											(0, l.jsx)('p', {
												className: 'mt-2 text-sm text-neutral-500',
												children:
													'Load and edit images instantly—no need to download heavy software or create an account.',
											}),
										],
									}),
									(0, l.jsxs)('div', {
										className: 'rounded-xl border border-neutral-800 p-6 shadow-sm',
										children: [
											(0, l.jsx)('h4', { className: 'text-lg font-semibold', children: '\uD83C\uDFA8 Smart Tools' }),
											(0, l.jsx)('p', {
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
				});
			var p = a(2635),
				g = a(7864),
				f = a.n(g);
			let b = () =>
					(0, l.jsx)('footer', {
						className: 'w-full border-t border-neutral-800 py-8',
						children: (0, l.jsxs)('div', {
							className:
								'container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-2 text-sm text-neutral-500 sm:flex-row md:gap-4 md:px-8 md:py-4',
							children: [
								(0, l.jsxs)('p', { children: ['\xa9 ', new Date().getFullYear(), ' ', p.C, '. All rights reserved.'] }),
								(0, l.jsx)('div', {
									className: 'space-x-4',
									children: (0, l.jsx)(f(), {
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
				j = () =>
					(0, l.jsx)('header', {
						className: 'w-full',
						children: (0, l.jsxs)('div', {
							className: 'container mx-auto flex items-center justify-between px-4 py-2 md:px-8 md:py-4',
							children: [
								(0, l.jsx)(f(), { href: '/', children: (0, l.jsx)('h1', { className: 'font-black', children: p.C }) }),
								(0, l.jsx)('nav', {
									className: 'space-x-4 text-sm font-medium md:text-base',
									children: (0, l.jsx)(f(), {
										href: '/qrcode',
										className: 'text-neutral-500 hover:text-white',
										children: 'QRCode',
									}),
								}),
							],
						}),
					}),
				w = () => {
					var e, t, a;
					let [{ originalBase64: n = '', filteredBase64: m = '', file: p = null }, g] = (0, u.useState)({
							originalBase64: '',
							filteredBase64: '',
							file: null,
						}),
						f = async (e) => {
							var t;
							let a = null == (t = e.target.files) ? void 0 : t[0];
							if (a) {
								let e = await s(a);
								g((t) => ({ ...t, originalBase64: e, filteredBase64: '', file: a }));
							}
						};
					return (0, l.jsxs)(l.Fragment, {
						children: [
							(0, l.jsx)(j, {}),
							(0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
							(0, l.jsx)('section', {
								className: 'w-full py-20',
								children: (0, l.jsxs)('div', {
									className: 'mx-auto flex max-w-3xl flex-col gap-y-8 px-4 text-center sm:px-6',
									children: [
										(0, l.jsx)('h2', {
											className: 'text-4xl font-extrabold sm:text-5xl',
											children: 'Edit Images with Ease',
										}),
										(0, l.jsx)('p', {
											className: 'text-lg text-neutral-500',
											children:
												'Upload and edit your images directly in the browser—crop, draw, blur, and more with full privacy.',
										}),
										(0, l.jsxs)('div', {
											className: 'flex justify-center gap-4',
											children: [
												(0, l.jsxs)('label', {
													className:
														'inline-block cursor-pointer rounded-full bg-neutral-100 px-6 py-3 text-neutral-900',
													children: [
														(0, l.jsx)('span', { children: 'Upload Image' }),
														(0, l.jsx)('input', { type: 'file', accept: 'image/*', onChange: f, className: 'hidden' }),
													],
												}),
												(null == (e = d(m || n)) ? void 0 : e.includes('png')) &&
													(0, l.jsx)('button', {
														onClick: async () => {
															let e = await i(m || n);
															(0, r.RG)({ content: e, format: 'ico', filename: 'favicon' }).image();
														},
														className:
															'cursor-pointer rounded-full bg-neutral-100 px-6 py-3 text-neutral-900 transition',
														children: 'Export as ICO',
													}),
												(null == (t = d(m || n)) ? void 0 : t.includes('png')) &&
													(0, l.jsx)('button', {
														onClick: async () => {
															let e = await o(m || n);
															(0, r.RG)({ content: e, format: 'jpg', filename: 'image' }).image();
														},
														className:
															'cursor-pointer rounded-full bg-neutral-100 px-6 py-3 text-neutral-900 transition',
														children: 'Export as JPG',
													}),
												(null == (a = d(m || n)) ? void 0 : a.includes('svg')) &&
													(0, l.jsx)('button', {
														onClick: async () => {
															let e = await c(m || n);
															(0, r.RG)({ content: e, format: 'png', filename: 'image' }).image();
														},
														className:
															'cursor-pointer rounded-full bg-neutral-100 px-6 py-3 text-neutral-900 transition',
														children: 'Export as PNG',
													}),
											],
										}),
									],
								}),
							}),
							(0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
							!p &&
								(0, l.jsxs)(l.Fragment, {
									children: [
										(0, l.jsx)(h, {}),
										(0, l.jsx)('div', { className: 'w-full border-t border-neutral-800' }),
										(0, l.jsx)('section', {
											className: 'w-full py-16',
											children: (0, l.jsxs)('div', {
												className: 'mx-auto max-w-3xl px-6 text-center',
												children: [
													(0, l.jsx)('h3', {
														className: 'text-2xl font-bold sm:text-3xl',
														children: 'Ready to edit your image?',
													}),
													(0, l.jsx)('p', {
														className: 'mt-4 text-neutral-500',
														children:
															'Upload your image and start editing instantly — no sign-up, no server, 100% local and private.',
													}),
													(0, l.jsxs)('label', {
														className:
															'mt-6 inline-block cursor-pointer rounded-full bg-neutral-100 px-6 py-3 text-neutral-900',
														children: [
															(0, l.jsx)('span', { children: 'Upload Image' }),
															(0, l.jsx)('input', {
																type: 'file',
																accept: 'image/*',
																onChange: f,
																className: 'hidden',
															}),
														],
													}),
												],
											}),
										}),
									],
								}),
							p &&
								(0, l.jsxs)('div', {
									className: 'container mx-auto flex flex-col gap-y-8 p-8',
									children: [
										(0, l.jsx)('div', {
											className: 'flex flex-col gap-y-8',
											children: (0, l.jsxs)('div', {
												className: 'grid grid-cols-2 gap-8',
												children: [
													(0, l.jsx)('button', {
														type: 'button',
														onClick: async () => {
															let e = await x('golden', n);
															g((t) => ({ ...t, filteredBase64: e }));
														},
														className: 'w-full cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-900',
														children: 'Filter - Golden',
													}),
													(0, l.jsx)('button', {
														type: 'button',
														onClick: async () => {
															let e = await x('grayscale', n);
															g((t) => ({ ...t, filteredBase64: e }));
														},
														className: 'w-full cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-900',
														children: 'Filter - Grayscale',
													}),
												],
											}),
										}),
										(0, l.jsx)('div', {
											className: 'h-64 bg-contain bg-center bg-no-repeat md:h-128',
											style: { backgroundImage: 'url('.concat(m || n, ')') },
										}),
									],
								}),
							(0, l.jsx)(b, {}),
						],
					});
				};
		},
	},
]);
