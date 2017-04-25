import React, { Component } from 'react'

export class Icon extends Component {
  render () {
    let stringified
    switch (this.props.name) {
      case 'logo':
        stringified = `<svg width="27" height="9" viewBox="0 0 27 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:figma="http://www.figma.com/figma/ns"><g id="logo-canvas" transform="translate(-241 395)" figma:type="canvas"><g id="logo-group" style="mix-blend-mode:normal;" figma:type="frame"><g id="logo" style="mix-blend-mode:normal;" figma:type="vector"><use xlink:href="#logo-path0_fill" transform="translate(241.753 -394.64)" style="mix-blend-mode:normal;"/><use xlink:href="#logo-path1_fill" transform="translate(241.753 -394.64)" style="mix-blend-mode:normal;"/><use xlink:href="#logo-path2_fill" transform="translate(241.753 -394.64)" style="mix-blend-mode:normal;"/><use xlink:href="#logo-path3_fill" transform="translate(241.753 -394.64)" style="mix-blend-mode:normal;"/></g><g id="apco" style="mix-blend-mode:normal;" figma:type="vector"><use xlink:href="#logo-path4_fill" transform="matrix(6.12323e-17 1 -1 6.12323e-17 248.07 -387.1)" style="mix-blend-mode:normal;"/><mask id="mask0_outline_ins"><use xlink:href="#logo-path4_fill" fill="white" transform="matrix(6.12323e-17 1 -1 6.12323e-17 248.07 -387.1)"/></mask><g mask="url(#mask0_outline_ins)"><use xlink:href="#logo-path5_stroke_2x" transform="matrix(6.12323e-17 1 -1 6.12323e-17 248.07 -387.1)" style="mix-blend-mode:normal;"/></g></g><g id="apco" style="mix-blend-mode:normal;" figma:type="vector"><use xlink:href="#logo-path6_fill" transform="matrix(6.12323e-17 1 -1 6.12323e-17 268 -387.092)" style="mix-blend-mode:normal;"/><mask id="logo-mask1_outline_ins"><use xlink:href="#logo-path6_fill" fill="white" transform="matrix(6.12323e-17 1 -1 6.12323e-17 268 -387.092)"/></mask><g mask="url(#logo-mask1_outline_ins)"><use xlink:href="#logo-path7_stroke_2x" transform="matrix(6.12323e-17 1 -1 6.12323e-17 268 -387.092)" style="mix-blend-mode:normal;"/></g></g></g></g><defs><path id="logo-path0_fill" d="M 4.152 2.412L 4.152 2.256C 4.152 1.864 4.02 1.564 3.756 1.356C 3.5 1.14 3.164 1.032 2.748 1.032C 2.428 1.032 2.176 1.088 1.992 1.2C 1.816 1.304 1.648 1.464 1.488 1.68C 1.44 1.744 1.388 1.788 1.332 1.812C 1.276 1.836 1.2 1.848 1.104 1.848L 0.744 1.848C 0.656 1.848 0.576 1.816 0.504 1.752C 0.44 1.688 0.412 1.612 0.42 1.524C 0.444 1.284 0.56 1.048 0.768 0.816C 0.984 0.576 1.268 0.379999 1.62 0.228C 1.972 0.0759993 2.348 0 2.748 0C 3.492 0 4.092 0.208 4.548 0.624C 5.012 1.04 5.244 1.624 5.244 2.376L 5.244 6.036C 5.244 6.124 5.212 6.2 5.148 6.264C 5.084 6.328 5.008 6.36 4.92 6.36L 4.476 6.36C 4.388 6.36 4.312 6.328 4.248 6.264C 4.184 6.2 4.152 6.124 4.152 6.036L 4.152 5.544C 4.024 5.832 3.752 6.06 3.336 6.228C 2.92 6.396 2.504 6.48 2.088 6.48C 1.68 6.48 1.316 6.408 0.996 6.264C 0.676 6.112 0.428 5.908 0.252 5.652C 0.0840001 5.396 0 5.108 0 4.788C 0 4.188 0.224 3.72 0.672 3.384C 1.12 3.04 1.716 2.808 2.46 2.688L 4.152 2.412ZM 4.152 3.372L 2.736 3.6C 2.216 3.68 1.812 3.812 1.524 3.996C 1.236 4.172 1.092 4.396 1.092 4.668C 1.092 4.868 1.184 5.048 1.368 5.208C 1.552 5.368 1.832 5.448 2.208 5.448C 2.784 5.448 3.252 5.284 3.612 4.956C 3.972 4.628 4.152 4.2 4.152 3.672L 4.152 3.372Z"/><path id="logo-path1_fill" d="M 8.08678 8.316C 8.08678 8.404 8.05478 8.48 7.99078 8.544C 7.92678 8.608 7.85078 8.64 7.76278 8.64L 7.31878 8.64C 7.23078 8.64 7.15478 8.608 7.09078 8.544C 7.02678 8.48 6.99478 8.404 6.99478 8.316L 6.99478 0.444C 6.99478 0.356 7.02678 0.28 7.09078 0.216C 7.15478 0.152 7.23078 0.12 7.31878 0.12L 7.76278 0.12C 7.85078 0.12 7.92678 0.152 7.99078 0.216C 8.05478 0.28 8.08678 0.356 8.08678 0.444L 8.08678 0.816C 8.49478 0.272 9.11478 0 9.94678 0C 10.4428 0 10.8908 0.115999 11.2908 0.348C 11.6988 0.58 12.0228 0.912 12.2628 1.344C 12.5108 1.776 12.6468 2.28 12.6708 2.856C 12.6788 2.936 12.6828 3.064 12.6828 3.24C 12.6828 3.424 12.6788 3.556 12.6708 3.636C 12.6468 4.212 12.5108 4.716 12.2628 5.148C 12.0228 5.572 11.7028 5.9 11.3028 6.132C 10.9028 6.364 10.4508 6.48 9.94678 6.48C 9.49878 6.48 9.11878 6.404 8.80678 6.252C 8.50278 6.092 8.26278 5.896 8.08678 5.664L 8.08678 8.316ZM 8.08678 3.672C 8.11078 4.232 8.27878 4.668 8.59078 4.98C 8.90278 5.292 9.31478 5.448 9.82678 5.448C 10.3468 5.448 10.7588 5.28 11.0628 4.944C 11.3748 4.608 11.5468 4.152 11.5788 3.576C 11.5868 3.496 11.5908 3.384 11.5908 3.24C 11.5908 3.096 11.5868 2.984 11.5788 2.904C 11.5468 2.328 11.3748 1.872 11.0628 1.536C 10.7588 1.2 10.3468 1.032 9.82678 1.032C 9.33078 1.032 8.92278 1.188 8.60278 1.5C 8.28278 1.804 8.11078 2.212 8.08678 2.724L 8.07478 3.192L 8.08678 3.672Z"/><path id="logo-path2_fill" d="M 16.6867 5.448C 17.4867 5.448 18.0267 5.136 18.3067 4.512C 18.3627 4.392 18.4187 4.308 18.4747 4.26C 18.5307 4.212 18.6067 4.188 18.7027 4.188L 19.0627 4.188C 19.1507 4.188 19.2267 4.22 19.2907 4.284C 19.3547 4.34 19.3867 4.408 19.3867 4.488C 19.3867 4.76 19.2787 5.052 19.0627 5.364C 18.8467 5.676 18.5347 5.94 18.1267 6.156C 17.7187 6.372 17.2387 6.48 16.6867 6.48C 16.1187 6.48 15.6267 6.36 15.2107 6.12C 14.7947 5.88 14.4747 5.552 14.2507 5.136C 14.0267 4.712 13.9027 4.24 13.8787 3.72C 13.8707 3.624 13.8667 3.44 13.8667 3.168C 13.8667 2.976 13.8707 2.84 13.8787 2.76C 13.9507 1.944 14.2267 1.28 14.7067 0.768C 15.1867 0.255999 15.8467 0 16.6867 0C 17.2387 0 17.7147 0.107999 18.1147 0.323999C 18.5227 0.532 18.8307 0.792 19.0387 1.104C 19.2547 1.408 19.3707 1.696 19.3867 1.968C 19.3947 2.056 19.3627 2.132 19.2907 2.196C 19.2267 2.26 19.1507 2.292 19.0627 2.292L 18.7027 2.292C 18.6067 2.292 18.5307 2.268 18.4747 2.22C 18.4187 2.172 18.3627 2.088 18.3067 1.968C 18.0267 1.344 17.4867 1.032 16.6867 1.032C 16.2467 1.032 15.8627 1.18 15.5347 1.476C 15.2067 1.772 15.0187 2.22 14.9707 2.82C 14.9627 2.908 14.9587 3.052 14.9587 3.252C 14.9587 3.436 14.9627 3.572 14.9707 3.66C 15.0267 4.26 15.2147 4.708 15.5347 5.004C 15.8627 5.3 16.2467 5.448 16.6867 5.448Z"/><path id="logo-path3_fill" d="M 26.2229 2.676C 26.2389 2.852 26.2469 3.044 26.2469 3.252C 26.2469 3.444 26.2389 3.628 26.2229 3.804C 26.1509 4.62 25.8669 5.272 25.3709 5.76C 24.8829 6.24 24.2189 6.48 23.3789 6.48C 22.5389 6.48 21.8709 6.24 21.3749 5.76C 20.8869 5.272 20.6069 4.62 20.5349 3.804C 20.5269 3.716 20.5229 3.532 20.5229 3.252C 20.5229 2.956 20.5269 2.764 20.5349 2.676C 20.5989 1.86 20.8789 1.212 21.3749 0.731999C 21.8709 0.243999 22.5389 0 23.3789 0C 24.2189 0 24.8869 0.243999 25.3829 0.731999C 25.8789 1.212 26.1589 1.86 26.2229 2.676ZM 25.1309 2.736C 25.0829 2.224 24.9109 1.812 24.6149 1.5C 24.3269 1.188 23.9149 1.032 23.3789 1.032C 22.8429 1.032 22.4269 1.188 22.1309 1.5C 21.8429 1.812 21.6749 2.224 21.6269 2.736C 21.6189 2.832 21.6149 3.004 21.6149 3.252C 21.6149 3.492 21.6189 3.656 21.6269 3.744C 21.6749 4.256 21.8429 4.668 22.1309 4.98C 22.4269 5.292 22.8429 5.448 23.3789 5.448C 23.9149 5.448 24.3269 5.292 24.6149 4.98C 24.9109 4.668 25.0829 4.256 25.1309 3.744C 25.1469 3.568 25.1549 3.404 25.1549 3.252C 25.1549 3.1 25.1469 2.928 25.1309 2.736Z"/><path id="logo-path4_fill" d="M 0.996 6.17047C 1.06 6.10647 1.092 6.03047 1.092 5.94247L 1.10001 0.32L 1.10001 0C 1.10001 0.088 1.06801 0.156 1.00401 0.22C 0.940006 0.284 0.864007 0.32 0.776007 0.32L 0.00800705 0.32L 0 5.94247C 0 6.03047 0.0319998 6.10647 0.0959997 6.17047C 0.16 6.23447 0.236 6.26647 0.324 6.26647L 0.768 6.26647C 0.856 6.26647 0.932 6.23447 0.996 6.17047Z"/><path id="logo-path5_stroke_2x" d="M 1.092 5.94247L 0.0919991 5.94104L 0.0919991 5.94247L 1.092 5.94247ZM 0.996 6.17047L 1.70311 6.87757L 1.70311 6.87757L 0.996 6.17047ZM 0.0959997 6.17047L -0.611108 6.87757L -0.611108 6.87757L 0.0959997 6.17047ZM 0 5.94247L -1 5.94104L -1 5.94247L 0 5.94247ZM 1.10001 0.32L 2.10001 0.321424L 2.10001 0.32L 1.10001 0.32ZM 0.00800705 0.32L 0.00800705 -0.68L -0.99057 -0.68L -0.991992 0.318576L 0.00800705 0.32ZM 1.00401 0.22L 1.71111 0.927107L 1.71111 0.927107L 1.00401 0.22ZM 0.0919991 5.94247C 0.0919991 5.86226 0.107235 5.77034 0.146362 5.67742C 0.185255 5.58504 0.238377 5.51388 0.288892 5.46336L 1.70311 6.87757C 1.94866 6.63202 2.092 6.30402 2.092 5.94247L 0.0919991 5.94247ZM 0.288892 5.46336C 0.339404 5.41285 0.410568 5.35973 0.502939 5.32084C 0.595868 5.28171 0.687784 5.26647 0.768 5.26647L 0.768 7.26647C 1.12957 7.26647 1.45756 7.12312 1.70311 6.87757L 0.288892 5.46336ZM 0.768 5.26647L 0.324 5.26647L 0.324 7.26647L 0.768 7.26647L 0.768 5.26647ZM 0.324 5.26647C 0.404215 5.26647 0.496132 5.28171 0.58906 5.32083C 0.68143 5.35973 0.752594 5.41285 0.803107 5.46336L -0.611108 6.87757C -0.365558 7.12312 -0.0375656 7.26647 0.324 7.26647L 0.324 5.26647ZM 0.803108 5.46336C 0.853622 5.51388 0.906743 5.58504 0.945636 5.67741C 0.984764 5.77034 1 5.86226 1 5.94247L -1 5.94247C -1 6.30403 -0.856661 6.63202 -0.611108 6.87757L 0.803108 5.46336ZM 0.100007 0.318576L 0.0920001 5.94104L 2.092 5.94389L 2.10001 0.321424L 0.100007 0.318576ZM 0.999999 5.94389L 1.00801 0.321424L -0.991992 0.318576L -0.999999 5.94104L 0.999999 5.94389ZM 0.100006 0C 0.100006 -0.0829869 0.116341 -0.183968 0.162194 -0.287137C 0.206389 -0.386576 0.262161 -0.452368 0.2969 -0.487107L 1.71111 0.927107C 1.9358 0.702417 2.10001 0.388913 2.10001 0L 0.100006 0ZM 0.2969 -0.487107C 0.390938 -0.581145 0.559798 -0.68 0.776007 -0.68L 0.776007 1.32C 1.16822 1.32 1.48907 1.14914 1.71111 0.927107L 0.2969 -0.487107ZM 2.10001 0.32L 2.10001 0L 0.100006 0L 0.100006 0.32L 2.10001 0.32ZM 0.776007 -0.68L 0.00800705 -0.68L 0.00800705 1.32L 0.776007 1.32L 0.776007 -0.68Z"/><path id="logo-path6_fill" d="M 0.0959997 0.0959997C 0.0319998 0.16 0 0.236001 0 0.324L 0 17.15L 0.768 17.15C 0.856 17.15 0.931999 17.186 0.995999 17.25C 1.06 17.314 1.092 17.382 1.092 17.47L 1.092 17.15L 1.092 0.696L 1.092 0.324C 1.092 0.236001 1.06 0.16 0.996 0.0959997C 0.932 0.0320001 0.856 0 0.768 0L 0.324 0C 0.236 0 0.16 0.0320001 0.0959997 0.0959997Z"/><path id="logo-path7_stroke_2x" d="M 0.0959997 0.0959997L -0.611105 -0.611109L -0.61111 -0.611105L 0.0959997 0.0959997ZM 0.996 0.0959997L 1.70311 -0.611104L 1.7031 -0.611109L 0.996 0.0959997ZM 0 17.15L -1 17.15L -1 18.15L 0 18.15L 0 17.15ZM 1 0.324C 1 0.404213 0.984763 0.496128 0.945636 0.589055C 0.906744 0.681425 0.853623 0.75259 0.803109 0.803104L -0.61111 -0.611105C -0.856661 -0.365551 -1 -0.0375582 -1 0.324L 1 0.324ZM 0.803105 0.803108C 0.752591 0.853622 0.681426 0.906743 0.589056 0.945636C 0.496128 0.984763 0.404213 1 0.324 1L 0.324 -1C -0.0375612 -1 -0.365554 -0.856659 -0.611105 -0.611109L 0.803105 0.803108ZM 0.324 1L 0.768 1L 0.768 -1L 0.324 -1L 0.324 1ZM 0.768 1C 0.687786 1 0.595871 0.984763 0.502943 0.945635C 0.410572 0.906742 0.339408 0.853621 0.288895 0.803108L 1.7031 -0.611109C 1.45755 -0.856658 1.12956 -1 0.768 -1L 0.768 1ZM 0.28889 0.803104C 0.238375 0.752588 0.185254 0.681423 0.146362 0.589052C 0.107235 0.496125 0.0919991 0.404211 0.0919991 0.324L 2.092 0.324C 2.092 -0.0375546 1.94866 -0.365549 1.70311 -0.611104L 0.28889 0.803104ZM 0.0919991 0.324L 0.0919991 0.696L 2.092 0.696L 2.092 0.324L 0.0919991 0.324ZM 1 17.15L 1 0.324L -1 0.324L -1 17.15L 1 17.15ZM 0.0919991 0.696L 0.0919991 17.15L 2.092 17.15L 2.092 0.696L 0.0919991 0.696ZM 0.768 18.15C 0.551784 18.15 0.382927 18.0511 0.288897 17.9571L 1.7031 16.5429C 1.48107 16.3209 1.16022 16.15 0.768 16.15L 0.768 18.15ZM 0.288897 17.9571C 0.254155 17.9224 0.198382 17.8566 0.154187 17.7571C 0.108334 17.654 0.0919991 17.553 0.0919991 17.47L 2.092 17.47C 2.092 17.0811 1.9278 16.7676 1.7031 16.5429L 0.288897 17.9571ZM 0.0919991 17.15L 0.0919991 17.47L 2.092 17.47L 2.092 17.15L 0.0919991 17.15ZM 0.768 16.15L 0 16.15L 0 18.15L 0.768 18.15L 0.768 16.15Z"/></defs></svg>`
        break
      case 'github':
        stringified = `<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><use style="mix-blend-mode:normal;" xlink:href="#github-fill" /><defs><path id="github-fill" d="M704 1216q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm640 0q0 40-12.5 82t-43 76-72.5 34-72.5-34-43-76-12.5-82 12.5-82 43-76 72.5-34 72.5 34 43 76 12.5 82zm160 0q0-120-69-204t-187-84q-41 0-195 21-71 11-157 11t-157-11q-152-21-195-21-118 0-187 84t-69 204q0 88 32 153.5t81 103 122 60 140 29.5 149 7h168q82 0 149-7t140-29.5 122-60 81-103 32-153.5zm224-176q0 207-61 331-38 77-105.5 133t-141 86-170 47.5-171.5 22-167 4.5q-78 0-142-3t-147.5-12.5-152.5-30-137-51.5-121-81-86-115q-62-123-62-331 0-237 136-396-27-82-27-170 0-116 51-218 108 0 190 39.5t189 123.5q147-35 309-35 148 0 280 32 105-82 187-121t189-39q51 102 51 218 0 87-27 168 136 160 136 398z"/></defs></svg>`
        break
      case 'linkedin':
        stringified = `<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><use style="mix-blend-mode:normal;" xlink:href="#linkedin-fill" /><defs><path id="linkedin-fill" d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"/></defs></svg>`
        break
      case 'instagram':
        stringified = `<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><use style="mix-blend-mode:normal;" xlink:href="#instagram-fill" /><defs><path id="instagram-fill" d="M1490 1426v-648h-135q20 63 20 131 0 126-64 232.5t-174 168.5-240 62q-197 0-337-135.5t-140-327.5q0-68 20-131h-141v648q0 26 17.5 43.5t43.5 17.5h1069q25 0 43-17.5t18-43.5zm-284-533q0-124-90.5-211.5t-218.5-87.5q-127 0-217.5 87.5t-90.5 211.5 90.5 211.5 217.5 87.5q128 0 218.5-87.5t90.5-211.5zm284-360v-165q0-28-20-48.5t-49-20.5h-174q-29 0-49 20.5t-20 48.5v165q0 29 20 49t49 20h174q29 0 49-20t20-49zm174-208v1142q0 81-58 139t-139 58h-1142q-81 0-139-58t-58-139v-1142q0-81 58-139t139-58h1142q81 0 139 58t58 139z"/></defs></svg>`
        break
      default:
        return (<div className='icon' />)
    }

    if (stringified) {
      return (<div key={`icon--${Math.random() * Math.random()}`}
        dangerouslySetInnerHTML={{__html: stringified}}
        className={`icon ${this.props.className}`}
      />)
    } else return (<div />)
  }
}

export default Icon