import { VALUE, VALID, EDITABLE, LABEL } from "../presentationModel/presentationModel.js";

export { personListItemProjector, formProjector }

const masterAttributes = [ "firstname", "lastname" ];

const bindTextInput = ( textAttr, inputElement ) => {
    inputElement.oninput = _ => textAttr.setConvertedValue( inputElement.value );

    textAttr.getObs( VALUE ).onChange( text => inputElement.value = text );

    textAttr.getObs( VALID, true ).onChange(
        valid => inputElement.classList.toggle( "invalid", !valid )
    );

    textAttr.getObs( EDITABLE, true ).onChange(
        isEditable => inputElement.toggleAttribute( "invalid", !isEditable )
    );

    textAttr.getObs( LABEL, '' ).onChange( label => inputElement.setAttribute( "title", label ) );
};

const personListItemProjector = ( masterController, selectionController, rootElement, person ) => {
    const row = rootElement.appendChild( document.createElement( "TR" ) );

    const deleteButton = row.appendChild( document.createElement( "TD" ) )
        .appendChild( document.createElement( "BUTTON" ) );
    deleteButton.className = "delete";
    deleteButton.innerHTML = "&times;";
    deleteButton.onclick = _ => masterController.removePerson( person );

    masterAttributes.forEach( attributeName => {
        const inputElement = row.appendChild( document.createElement( "TD" ) )
            .appendChild( document.createElement( "INPUT" ) );
        inputElement.type = "text";
        bindTextInput( person[attributeName], inputElement );
        inputElement.onfocus = _ => selectionController.setSelectedPerson( person );
    } );

    selectionController.onPersonSelected(
        selected => row.classList.toggle( "selected", selected === person )
    );

    masterController.onPersonRemove( ( removedPerson, removeMe ) => {
        if (removedPerson !== person) return;
        rootElement.removeChild( row );
        selectionController.clearSelection();
        removeMe();
    } );

    selectionController.setSelectedPerson( person );
};

const formProjector = ( detailController, rootElement, model, attributeNames ) => {
    rootElement.replaceChildren();

    attributeNames.forEach( name => {
        rootElement.innerHTML += `
            <TR>
                <TH><LABEL for="${name}"></LABEL></TH>
                <TD><INPUT TYPE="text" id="${name}"/></TD>
            </TR>
        `;
    } );

    attributeNames.forEach( name => {
        bindTextInput( model[name], rootElement.querySelector( '#' + name ) );
        model[name].getObs( LABEL, '' )
            .onChange( label => rootElement.querySelector( `[for="${name}"]` ).textContent = label );
    } );
};
