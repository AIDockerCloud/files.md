// i18n.js - Internationalization support for Files.md
(function () {
    const I18N = {
        zh: {
            // Document Title
            'app.title': 'Files.md - 私密、安静的思考空间',

            // Toolbar & Navigation
            'toolbar.new_file': '新建文件 (⌘N)',
            'toolbar.new_folder': '新建文件夹 (⌘⇧N)',
            'toolbar.open_folder': '打开文件夹',
            'toolbar.random_file': '随机漫游文件',
            'toolbar.close_sidebar': '收起侧边栏 (⌘~)',
            'toolbar.switch_lang': '切换语言 / Switch Language (当前: 中文)',
            'sidebar.open_folder_btn': '打开文件夹',
            'nav.go_backward': '后退 (⌘[)',
            'nav.go_forward': '前进 (⌘])',
            'nav.close_split': '关闭分栏 (Esc)',

            // Placeholders
            'search.placeholder': '跳转到文件...',
            'move.placeholder': '移动到文件夹...',
            'chat.placeholder': '记录你的想法...',

            // Chat UI
            'chat.mic': '录制语音消息',
            'chat.send': '发送',
            'chat.close': '关闭聊天',
            'chat.fullscreen': '切换全屏',
            'chat.empty_title': '清空思绪，自由记录',
            'chat.mark_done': '标记为已完成',
            'chat.to_file': '转为文件',
            'chat.to_journal': '写入日记',
            'chat.to_later': '稍后处理',
            'chat.to_read': '阅读清单',
            'chat.to_shop': '购物清单',
            'chat.to_watch': '观看清单',
            'chat.to_archive': '归档',
            'chat.to_recent': '转至 {filename}',

            // System Sidebar Nodes
            'node.chat': '聊天',
            'node.later': '稍后',
            'node.journal': '日记',
            'node.habits': '习惯',
            'node.insights': '统计',
            'node.archive': '归档',
            'node.read': '阅读清单',
            'node.watch': '观看清单',
            'node.shop': '购物清单',

            // Context Menu
            'menu.new_file': '新建文件',
            'menu.new_dir': '新建文件夹',
            'menu.rename': '重命名',
            'menu.delete': '删除',
            'menu.move': '移动',

            // Dialogs, Prompts & Alerts
            'dialog.create_file_failed': '创建文件失败: ',
            'dialog.new_dir_name': '新文件夹名称:',
            'dialog.folder_slash_err': '文件夹名称不能包含 "/"',
            'dialog.create_dir_failed': '创建文件夹失败: ',
            'dialog.rename_folder': '重命名文件夹:',
            'dialog.folder_char_err': '文件夹名称不能包含 "{char}"',
            'dialog.rename_failed': '重命名失败: ',
            'dialog.delete_dir_confirm': '确认删除文件夹 "{name}" 及其内部所有内容？',
            'dialog.delete_failed': '删除失败: ',
            'dialog.rename_file': '重命名文件:',
            'dialog.file_char_err': '文件名不能包含 "{char}"',
            'dialog.move_failed': '移动失败: ',
            'dialog.token_expired': '令牌已过期或无效，请尝试申请新链接。',
            'dialog.cant_access_folder': '无法访问文件夹。\n\n请重新打开文件夹并勾选“每次访问时允许”复选框',
            'dialog.enter_folder_name': '输入文件夹名称:',
            'dialog.folder_name_empty': '文件夹名称不能为空',
            'dialog.chrome_only': '目前仅 Chrome/Chromium 浏览器支持本地文件夹 :(',
            'dialog.mic_denied': '麦克风访问被拒绝或不可用: ',
            'dialog.voice_save_failed': '保存语音消息失败。',
            'dialog.voice_save_err': '保存语音消息出错: ',
            'dialog.save_file_failed': '保存文件失败，请重试。',
            'dialog.save_file_err': '保存文件出错: '
        },
        en: {
            // Document Title
            'app.title': 'Files.md',

            // Toolbar & Navigation
            'toolbar.new_file': 'New File (⌘N)',
            'toolbar.new_folder': 'New Folder (⌘⇧N)',
            'toolbar.open_folder': 'Open folder',
            'toolbar.random_file': 'Show Random File',
            'toolbar.close_sidebar': 'Close sidebar (⌘~)',
            'toolbar.switch_lang': 'Switch Language / 切换语言 (Current: EN)',
            'sidebar.open_folder_btn': 'Open folder',
            'nav.go_backward': 'Go Back (⌘[)',
            'nav.go_forward': 'Go Forward (⌘])',
            'nav.close_split': 'Close (Esc)',

            // Placeholders
            'search.placeholder': 'Go to file...',
            'move.placeholder': 'Move to folder...',
            'chat.placeholder': 'Dump your thoughts...',

            // Chat UI
            'chat.mic': 'Record voice message',
            'chat.send': 'Send',
            'chat.close': 'Close chat',
            'chat.fullscreen': 'Toggle fullscreen',
            'chat.empty_title': 'Free your mind',
            'chat.mark_done': 'Mark as done',
            'chat.to_file': 'To File',
            'chat.to_journal': 'To Journal',
            'chat.to_later': 'To Later',
            'chat.to_read': 'To Read',
            'chat.to_shop': 'To Shop',
            'chat.to_watch': 'To Watch',
            'chat.to_archive': 'To Archive',
            'chat.to_recent': 'To {filename}',

            // System Sidebar Nodes
            'node.chat': 'chat',
            'node.later': 'later',
            'node.journal': 'journal',
            'node.habits': 'habits',
            'node.insights': 'insights',
            'node.archive': 'archive',
            'node.read': 'read',
            'node.watch': 'watch',
            'node.shop': 'shop',

            // Context Menu
            'menu.new_file': 'New file',
            'menu.new_dir': 'New dir',
            'menu.rename': 'Rename',
            'menu.delete': 'Delete',
            'menu.move': 'Move',

            // Dialogs, Prompts & Alerts
            'dialog.create_file_failed': 'Create file failed: ',
            'dialog.new_dir_name': 'New directory name:',
            'dialog.folder_slash_err': 'Folder name cannot contain "/"',
            'dialog.create_dir_failed': 'Create dir failed: ',
            'dialog.rename_folder': 'Rename folder:',
            'dialog.folder_char_err': 'Folder name cannot contain "{char}"',
            'dialog.rename_failed': 'Rename failed: ',
            'dialog.delete_dir_confirm': 'Delete folder "{name}" and everything inside it?',
            'dialog.delete_failed': 'Delete failed: ',
            'dialog.rename_file': 'Rename file:',
            'dialog.file_char_err': 'File name cannot contain "{char}"',
            'dialog.move_failed': 'Move failed: ',
            'dialog.token_expired': 'The token has expired or is invalid. Please try to request a new link.',
            'dialog.cant_access_folder': 'Can\'t access folder.\n\nPlease, reopen the folder again and check "Allow on every visit" checkbox',
            'dialog.enter_folder_name': 'Enter folder name:',
            'dialog.folder_name_empty': 'Folder name cannot be empty',
            'dialog.chrome_only': 'For now only Chrome browser supports local folders :(',
            'dialog.mic_denied': 'Microphone access denied or unavailable: ',
            'dialog.voice_save_failed': 'Failed to save voice message.',
            'dialog.voice_save_err': 'Error saving voice message: ',
            'dialog.save_file_failed': 'Failed to save the file. Please try again.',
            'dialog.save_file_err': 'Error saving file: '
        }
    };

    function getLanguage() {
        let saved = localStorage.getItem('filesmd_lang');
        if (!saved) {
            // Default to Chinese if browser is Chinese, or default to zh
            saved = (navigator.language && navigator.language.toLowerCase().startsWith('zh')) ? 'zh' : 'zh';
        }
        return saved === 'en' ? 'en' : 'zh';
    }

    function t(key, params = {}) {
        const lang = getLanguage();
        let text = (I18N[lang] && I18N[lang][key]) || (I18N['en'] && I18N['en'][key]) || key;
        for (const [k, v] of Object.entries(params)) {
            text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        }
        return text;
    }

    function applyLanguage(lang) {
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        document.title = t('app.title');

        // Update elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = t(key);
        });

        // Update elements with data-i18n-tooltip
        document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
            const key = el.getAttribute('data-i18n-tooltip');
            if (key) {
                const text = t(key);
                el.setAttribute('data-tooltip', text);
                el.setAttribute('aria-label', text);
            }
        });

        // Update elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key) el.placeholder = t(key);
        });

        // Update elements with data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (key) {
                const text = t(key);
                el.title = text;
                el.setAttribute('aria-label', text);
            }
        });

        // Update language badge
        const badge = document.getElementById('lang-badge');
        if (badge) {
            badge.textContent = lang === 'zh' ? '中' : 'EN';
        }

        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) {
            const tipText = t('toolbar.switch_lang');
            langBtn.setAttribute('data-tooltip', tipText);
            langBtn.setAttribute('aria-label', tipText);
        }

        // Re-render sidebar if available
        if (typeof renderSidebar === 'function' && typeof tree !== 'undefined' && tree) {
            try { renderSidebar(); } catch (e) { console.error('Failed to re-render sidebar on lang change', e); }
        }

        // Re-render chat messages if available
        if (typeof renderMessages === 'function' && document.getElementById('chat')) {
            try {
                if (typeof lastChatText !== 'undefined') {
                    lastChatText = null;
                }
                renderMessages();
            } catch (e) { console.error('Failed to re-render chat on lang change', e); }
        }
    }

    function setLanguage(lang) {
        localStorage.setItem('filesmd_lang', lang);
        applyLanguage(lang);
    }

    function toggleLanguage() {
        const current = getLanguage();
        setLanguage(current === 'zh' ? 'en' : 'zh');
    }

    // Expose to window
    window.I18N = I18N;
    window.t = t;
    window.getLanguage = getLanguage;
    window.setLanguage = setLanguage;
    window.toggleLanguage = toggleLanguage;
    window.applyLanguage = applyLanguage;

    // Apply on DOM load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyLanguage(getLanguage()));
    } else {
        applyLanguage(getLanguage());
    }
})();
