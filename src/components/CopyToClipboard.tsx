"use client";

import React, { SyntheticEvent, useState } from "react";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { ContentCopy } from "@mui/icons-material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";

function CopyToClipboard({ text }: { text: string }) {
	const [open, setOpen] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard.writeText(text);
		setOpen(true);
	};

	const handleClose = (event: Event | SyntheticEvent<Element, Event>) => {
		setOpen(false);
	};

	return (
		<Box sx={{ marginLeft: "12px" }}>
			<Button
				onClick={copyToClipboard}
				sx={{ fontSize: "12px !important", padding: "6px !important" }}
				variant='contained'
			>
				{open ? (
					<CheckCircleOutlineRounded sx={{ height: "14px" }} />
				) : (
					<>
						<ContentCopy sx={{ height: "12px" }} /> Copiar
					</>
				)}
			</Button>
			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: "100%" }}>
					Copiado!
				</Alert>
			</Snackbar>
		</Box>
	);
}

export default CopyToClipboard;
