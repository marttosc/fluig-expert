<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content fluig-style-guide">

    <@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content">
        <div id="wcm-content" class="clearfix wcm-background">

            <#if pageRender.isEditMode() == true>
                <div name="formatBar" id="formatBar"></div>
                <div id="editPage" class="clearfix">
                    <h1>I'm editing this page.</h1>
                </div>
            <#else>
                <div id="editPage" class="clearfix">
                    <h1>I'm seeing this page.</h1>
                </div>
            </#if>

            <div class="row">
                <div class="col-xs-6">
                    <div id="divSlot1" class="editable-slot slotfull layout-1-1">
                        <@wcm.renderSlot id="SlotA" editableSlot="true" />
                    </div>
                </div>
            </div>

            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>