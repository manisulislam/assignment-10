import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import ReactTooltip from "react-tooltip";
import { authContext } from '../../Context/UserContext';


const ToolTip = () => {
    const {user} =useContext(authContext)
    return (
        <div>

            <button data-tip data-for="registerTip">
                <CgProfile></CgProfile>
            </button>
            <ReactTooltip id="registerTip" place="top" effect="solid">
        {
            user.displayName
        }
      </ReactTooltip>

        </div>
    );
};

export default ToolTip;